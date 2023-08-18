import { exec } from "child_process";
import { promisify } from "util";
import { resolve } from "path";
import { writeFile } from "fs";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import path from 'path';
import { spawn } from 'child_process';
import { createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { createReadStream } from 'fs';
import { createInterface } from 'readline';
import { createServer } from 'http';
import { createSecureServer } from 'http2';
import { createServer as createServerHttps } from 'https';
import { createServer as createServerHttp } from 'http';
import { createServer as createServerHttp2 } from 'http2';

const execAsync = promisify(exec);
const writeFileAsync = promisify(writeFile);



export const cppController = async (req, res) => {
    try {

        const { code, language } = req.body;
        const fileName = uuidv4();
        const __dirname = path.dirname(fileName);
        const filePath = resolve(`./temp/${fileName}.cpp`);

        const finalCode = `
#include <iostream>
using namespace std;
${code}
int main() {
    int i = 0;
    int arr[10] = {1,2,3,4,5,6,7,8,9,10};
    while(i<10){
        int a = arr[i];
        int b = arr[i+1];
        int c = sum(a,b);
        cout<<c<<endl;
        i=i+2;
    }
    return 0;
}
        `;


        await writeFileAsync(filePath, finalCode);

        let result = '';
        const output = '3\r\n7\r\n11\r\n15\r\n19\r\n'

        if (language === 'c++') {
            // Compile and execute C++ code
            const compileCmd = `g++ ${filePath} -o ${fileName}`;
            await execAsync(compileCmd);
            const executablePath = resolve(__dirname, `./${fileName}.exe`);

            const { stdout, stderr } = await execAsync(`${executablePath}`);
            //delete exe file
            result = stdout || stderr;
            await execAsync(`del ${fileName}.exe`);
            await execAsync(`cd temp && del ${fileName}.cpp`);

        }

        if (result == output) {
            return res.status(200).send({
                success: true,
                result: result,
                passed: true
            });
        } else {
            return res.status(200).send({
                success: true,
                result: result,
                passed: false
            });
        }


    } catch (error) {
        return res.status(200).send({
            success: false,
            message: "error in compilation",
            error
        })
    }

}

export const javaController = async (req, res) => {
    try {
        const { code, language } = req.body;
        const fileName = 'Main';
        const __dirname = path.dirname(fileName);
        const filePath = resolve(`./temp/${fileName}.java`);

        const finalCode = `
        import java.util.*;

        public class Main {
            ${code}
            public static void main(String[] args) {
                int i = 0;
                int arr[] = new int[]{ 1,2,3,4,5,6,7,8,9,10 };
                while(i<10){
                    int a = arr[i];
                    int b = arr[i+1];
                    int c = sum(a,b);
                    System.out.println(c);
                    i=i+2;
                }
              
            }
        }`;


        await writeFileAsync(filePath, finalCode);

        let result = '';
        const output = '3\r\n7\r\n11\r\n15\r\n19\r\n';

        if (language === 'java') {
            // Compile and execute java code
            const compileCmd = `javac ${filePath}`;
            await execAsync(compileCmd);
            const executablePath = resolve(__dirname, `./temp ${fileName}`);

            const { stdout, stderr } = await execAsync(`java -cp ${executablePath}`);
            //delete class file
            result = stdout || stderr;
            await execAsync(`cd temp && del ${fileName}.java`);
            await execAsync(`cd temp && del ${fileName}.class`);

        }

        if (result == output) {
            return res.status(200).send({
                success: true,
                result: result,
                passed: true
            });
        } else {
            return res.status(200).send({
                success: true,
                result: result,
                passed: false
            });
        }


    } catch (error) {
        return res.status(200).send({
            success: false,
            message: "error in compilation",
            error
        })
    }

}

export const pyController = async (req, res) => {
    try {
        const { code, language } = req.body;
        const fileName = uuidv4();
        const __dirname = path.dirname(fileName);
        const filePath = resolve(`./temp/${fileName}.py`);

        const finalCode = `
${code}
number = 1

while number <= 10:
    print(add_num(number,number+1))
    number += 2
        `;


        await writeFileAsync(filePath, finalCode);

        let result = '';
        const output = '3\r\n7\r\n11\r\n15\r\n19\r\n';

        if (language === 'python') {
            // Execute Python code
            const { stdout, stderr } = await execAsync(`python ./temp/${fileName}.py`);
            result = stdout || stderr;
            await execAsync(`cd temp && del ${fileName}.py`);
        }

        if (result == output) {
            return res.status(200).send({
                success: true,
                result: result,
                passed: true
            });
        } else {
            return res.status(200).send({
                success: true,
                result: result,
                passed: false
            });
        }


    } catch (error) {
        return res.status(200).send({
            success: false,
            message: "error in compilation",
            error
        })
    }

}

export const jdoodleController = async (req, res) => {
    try {
        const { apiUrl, requestData } = req.body;
        const response = await axios.post(apiUrl, requestData);
        return res.status(200).send({
            success: true,
            data: response.data
        });
    } catch (error) {
        console.log(error.response)
        return res.status(200).send({
            success: false,
            message: "error in compilation",
            error
        })
    }
}

