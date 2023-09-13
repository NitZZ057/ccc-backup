import React, { useEffect } from 'react'
import axios from 'axios';
import { useAuth } from '../../context/auth'
//codemirror
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { cpp } from '@codemirror/lang-cpp';
import { java } from '@codemirror/lang-java';
import { python } from '@codemirror/lang-python';
import { NavLink } from 'react-router-dom';


const Editor = () => {
  const [auth, setAuth] = useAuth();
  const [theme, setTheme] = React.useState('dracula');
  const [language, setLanguage] = React.useState('cpp');
  const [code, setCode] = React.useState('');
  const [passed, setPassed] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [error, setError] = React.useState([]);
  const [checking,setChecking] = React.useState(false);

  const [stdin,setStdin] = React.useState('');
  const [output,setOutput] = React.useState('');






  // const requestData = {
  //   script: coo,
  //   language: language,
  //   versionIndex: versionIndex,
  //   stdin: input,
  //   clientId: clientId,
  //   clientSecret: clientSecret,
  // };

  const languageMap = {
    'cpp': cpp,
    'java': java,
    'python3': python,
  };

  //   const codeMap = {
  //     'cpp':
  //       `int sum(int a,int b)
  // {
  //   //write your code here
  //   ${code}
  // }
  //     `,
  //     'java':
  //       `public static int sum(int a,int b) {
  //       //write your code here
  //       ${code}
  // }`,
  //     'python3': `def add_num(a,b):
  //     #write your code here
  //     ${code}
  // `
  //   };

  const codeMap = {
    'cpp':
      `//write your code to add three numbers`,
    'java':
      `//write your code to add three numbers`,
    'python3': `#write your code to add three numbers`
  };



  const onChange = React.useCallback((value, viewUpdate) => {
    setCode(value);
  }, []);

  const onlanChange = React.useCallback((language) => {
    setCode(' ');
    setCode(codeMap[language])
    // eslint-disable-next-line
  }, []);


  const getArgs = async () =>{
    const res = await axios.get('/api/v1/potd/args')
    console.log(res.data)
    if(res.data.success){
      setStdin(res.data.testcase)
      
      setOutput(res.data.output)
      
    }else{
      console.log(res.data.error);
    }
  }

  useEffect(()=>{
    getArgs();
    console.log(stdin,output);
  },[])

  const handleSubmit = async () => {

    // let res = ''
    // if (language === 'c++') {
    //   res = await axios.post('/api/v1/potd/compile/cpp', {
    //     code: code,
    //     language: language
    //   })
    // }if(language==='python3'){
    //   res = await axios.post('/api/v1/potd/compile/python', {
    //     code: code,
    //     language: 'python'
    //   })
    // } else {
    //   res = await axios.post(`/api/v1/potd/compile/${language}`, {
    //     code: code,
    //     language: language
    //   })
    // }


    const id = auth.user._id

    setChecking(true)
    setVisible(true)

    const response = await axios.post('/api/v1/potd/compile/jdoodle', { code, language, id, stdin,output });
    // console.log(response.data.data.output);

    // console.log(response?.data)
    setChecking(false)
    if (response?.data.success) {
      if(response.data.passed==false){
        alert(response.data.message)
        setVisible(false)
        return;
      }

      setPassed(response.data.passed)
      
      if (response.data.passed) {
        setError([])
      }
      else {
        setError((response.data.data.output).split("error:"))
      }
    } else {
      console.log("Error:", response.data.error.stderr)
      setVisible(false)
      setError((response.data.error.stderr).split("error:"))
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
          <option value="cpp">C++</option>
          <option value="java">Java</option>
          <option value="python3">Python</option>
        </select>
      </div>
      <div className="result">
        {
          visible ?
            <>
              {
                checking?'Checking...':passed ?
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
        // value={code}
        //
        value={code ? code : codeMap[language]}
        height="70vh"
        theme={theme === 'dracula' ? dracula : vscodeDark}
        extensions={[languageMap[language]({ jsx: true })]}
        onChange={onChange}
      />
      {
        auth.user != null ? <div className="potd-submit" onClick={handleSubmit}>
          <button className="potd-submit-btn">Submit</button>
        </div> : <div className="login-div">
          <button className="btn btn-lg">
            <NavLink to="/protected/login" className='potd-ln' title="login">
              Login to Submit
            </NavLink>
          </button>
        </div>
      }


    </>
    // <>
    //   <div className='theme-lang'>
    //     <select className='theme' onChange={(e) => setTheme(e.target.value)}>
    //       <option value="dracula">Dracula</option>
    //       <option value="vscodeDark">vscodeDark</option>
    //     </select>

    //     <select className='theme lang' onChange={(e) => {
    //       setLanguage(e.target.value)
    //       onlanChange(e.target.value)
    //       }}>
    //       <option value="cpp">C++</option>
    //       <option value="java">Java</option>
    //       <option value="python3">Python</option>
    //     </select>
    //   </div>
    //   <div className="result">
    //     {
    //       visible ?
    //         <>
    //           {
    //             passed ?
    //               <>
    //                 ✅Passed
    //               </> :
    //               <>
    //                 ❌Failed
    //               </>
    //           }

    //         </> :
    //         <>
    //         </>

    //     }
    //   </div>
    //   <div className="error">
    //     {error[1]}
    //   </div>
    //   <CodeMirror
    //     // value={code}
    //     value={code ? code : codeMap[language]}
    //     height="70vh"
    //     theme={theme === 'dracula' ? dracula : vscodeDark}
    //     extensions={[languageMap[language]({ jsx: true })]}
    //     onChange={onChange}
    //   />
    //   <div className="potd-submit" onClick={handleSubmit}>
    //     <button className="potd-submit-btn">Submit</button>
    //   </div>

    // </>
  );
}

export default Editor