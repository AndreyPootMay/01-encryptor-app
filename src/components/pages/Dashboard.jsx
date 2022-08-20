import { Input, Row, Col, Button } from 'antd';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const { TextArea } = Input;

const Dashboard = () => {
    const [decryptedValue, setDecryptedValue] = useState('');
    const [encryptedValue, setEncryptedValue] = useState('');

    const generateUniqId = () => {
        return 'id_encription_' + (new Date()).getTime() + '_' + parseInt((Math.random()) * 12);
    };

    const handleEncrypt = (e) => {
        e.preventDefault();

        const text = e.target[0].value;

        validate(text);

        console.log('encriptando...');

        let newMessage = text.replace(/e/gm, "enter");
        newMessage = newMessage.replace(/o/gm, "ober");
        newMessage = newMessage.replace(/i/gm, "imes");
        newMessage = newMessage.replace(/a/gm, "ai");
        newMessage = newMessage.replace(/u/gm, "ufat");

        setDecryptedValue(newMessage);
        toast.success(`Texto encriptado, solía ser ${text}, el resultado fue: ${newMessage}`);

        const newRegister = {
            id: generateUniqId,
            operation_type: 'Encriptar',
            original_text: text,
            final_text: newMessage,
        };

        localStorage.setItem('operations',
            JSON.stringify(newRegister)
        );
    };

    const handleDecrypt = (e) => {
        e.preventDefault();

        const text = e.target[0].value;

        validate(text);

        console.log('encriptando...');

        let newMessage = text.replace(/enter/gm, "e");
        newMessage = newMessage.replace(/ober/gm, "o");
        newMessage = newMessage.replace(/imes/gm, "i");
        newMessage = newMessage.replace(/ai/gm, "a");
        newMessage = newMessage.replace(/ufat/gm, "u");

        setEncryptedValue(newMessage);
        toast.success(`Texto desencriptado, solía ser ${text}, el resultado fue: ${newMessage}`);

        const newRegister = {
            id: generateUniqId,
            operation_type: 'Desencriptar',
            original_text: text,
            final_text: newMessage,
        };

        localStorage.setItem('operations',
            JSON.stringify(newRegister)
        );
    };

    const handleReset = () => {
        document.querySelector('#encrypted').value = '';
        document.querySelector('#decrypted').value = '';
        setDecryptedValue('');
        setEncryptedValue('');
        toast.success('Se han re-establecido los valores de ambos formularios');
    };

    const validate = (text) => {
        const regex = /[A-Z-á-ü-,]/;

        if (regex.test(text)) {
            alert('No utilizar mayúsculas o caracteres especiales');
        }
    };

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Encriptador para ONE Latam 🔎</h1>
            <Row justify='space-between'>
                <Col xs={6} md={6}>
                    <form onSubmit={(e) => handleEncrypt(e)}>
                        <TextArea autoSize={{
                            minRows: 4,
                            maxRows: 20,
                        }}
                            id='encrypted'
                            placeholder="Inserte el texto que desee encriptar" />
                        <br />
                        <Button htmlType='submit' type="primary" block>
                            Encriptar texto
                        </Button>
                    </form>
                    <hr />
                    {encryptedValue != '' && <b>Texto encriptado: {encryptedValue}</b>}
                </Col>
                <Col xs={6} md={6}>
                    <form onSubmit={(e) => handleDecrypt(e)}>
                        <TextArea autoSize={{
                            minRows: 4,
                            maxRows: 20,
                        }}
                            id='decrypted'
                            placeholder="Texto encriptado" />
                        <br />
                        <Button htmlType='submit' type="danger" block>
                            Desencriptar texto
                        </Button>
                    </form>
                    <hr />
                    {decryptedValue != '' && <b>Texto desencriptado: {decryptedValue}</b>}
                </Col>
            </Row>

            <Row style={{ alignItems: 'center' }}>
                <Button type="dashed" danger onClick={() => handleReset()}>
                    Re-iniciar
                </Button>
            </Row>

            <Toaster
                position="top-center"
                reverseOrder={true}
            />
        </>
    );
};

export default Dashboard;
