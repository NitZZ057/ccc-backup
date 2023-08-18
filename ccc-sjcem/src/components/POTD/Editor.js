import React from 'react'
import axios from 'axios';
//codemirror
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { javascript } from '@codemirror/lang-javascript';
import { cpp } from '@codemirror/lang-cpp';
import { java } from '@codemirror/lang-java';
import { python } from '@codemirror/lang-python';


const Editor = () => {
  const [theme, setTheme] = React.useState('dracula');
  const [language, setLanguage] = React.useState('c++');
  const [code, setCode] = React.useState('');
  const [passed, setPassed] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [error, setError] = React.useState([]);
  const a = 1
  const b = 3


  const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const versionIndex = '3';
// const input = `${a} ${b}`;
const input = `ajju`;

const apiUrl = 'https://api.jdoodle.com/v1/execute';

const requestData = {
  script: code,
  language: language,
  versionIndex: versionIndex,
  // stdin: input,
  stdin: input,
  clientId: clientId,
  clientSecret: clientSecret,
};

  const languageMap = {
    'c++': cpp,
    'java': java,
    'python': python,
    'javascript': javascript
  };

  const codeMap = {
    'c++':
      `int sum(int a,int b)
{
  //write your code here
  ${code}
}
    `,
    'java':
      `public static int sum(int a,int b) {
      //write your code here
      ${code}
}`,
    'python': `def add_num(a,b):
    #write your code here
`
  };

  const onChange = React.useCallback((value, viewUpdate) => {
    setCode(value);
  }, []);

  const onlanChange = React.useCallback((language) => {
    setCode(' ');
    setCode(codeMap[language])
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async () => {

    let res = ''
    if (language === 'c++') {
      res = await axios.post('/api/v1/potd/compile/cpp', {
        code: code,
        language: language
      })
    } else {
      res = await axios.post(`/api/v1/potd/compile/${language}`, {
        code: code,
        language: language
      })
    }

    // const coo = `
    // def main():
    //     name = input("Enter your name: ")
    //     print("Hello, " + name)
    
    // if __name__ == "__main__":
    //     main()
    // `
    // setCode(coo)

    // const response = await axios.post('/api/v1/potd/compile/jdoodle',{apiUrl, requestData});
    // console.log(response);

    console.log(res?.data)
    if (res?.data.success) {
      setPassed(res.data.passed)
      setVisible(true)
      setError([])
    } else {
      console.log("Error:", res.data.error.stderr)
      setVisible(false)
      setError((res.data.error.stderr).split("error:"))
    }



  }




  return (
    <>
      <div className='theme-lang'>
        <select className='theme' onChange={(e) => setTheme(e.target.value)}>
          <option value="dracula">Dracula</option>
          <option value="vscodeDark">vscodeDark</option>
        </select>

        <select className='theme lang' onChange={(e) => {
          setLanguage(e.target.value)
          onlanChange(e.target.value)
          }}>
          <option value="c++">C++</option>
          <option value="java">Java</option>
          <option value="python">Python</option>
        </select>
      </div>
      <div className="result">
        {
          visible ?
            <>
              {
                passed ?
                  <>
                    ✅Passed
                  </> :
                  <>
                    ❌Failed
                  </>
              }

            </> :
            <>
            </>

        }
      </div>
      <div className="error">
        {error[1]}
      </div>
      <CodeMirror
        value={code ? code : codeMap[language]}
        height="70vh"
        theme={theme === 'dracula' ? dracula : vscodeDark}
        extensions={[languageMap[language]({ jsx: true })]}
        onChange={onChange}
      />
      <div className="potd-submit" onClick={handleSubmit}>
        <button className="potd-submit-btn">Submit</button>
      </div>

    </>
  );
}

export default Editor