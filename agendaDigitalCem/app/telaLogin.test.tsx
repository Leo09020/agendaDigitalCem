import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { Alert } from 'react-native';

import TelaAcesso from './telaLogin';

describe('Testes das telas de login', () =>{

    test('Renderizar as telas', async () => {

        await render(<TelaAcesso/>);

        expect(screen.getByText('Acessar agenda:')).toBeTruthy();
        expect(screen.getByPlaceholderText('Digite seu email')).toBeTruthy();
        expect(screen.getByPlaceholderText('Digite sua senha')).toBeTruthy();
        expect(screen.getByText('enviar')).toBeTruthy();

    })

})