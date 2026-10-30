Projeto Integrador de Tecnologia da Informação - Agenda Digital para escola:

--- Descrição do Projeto ---
 
Este projeto que está sendo desenvolvido propõe a criação de uma aplicação para melhorar a gestão da comunicação de uma escola.

A escola em questão ainda utiliza um modelo de comunicação antigo e ineficiente frente com as novas tecnologias existentes

O problemas encontrados: 
* comunicação com responsáveis por meio de telefone; 
* recados, avisos e informações dos alunos sendo enviadas por meio de uma agenda física
* consumo elevado de materiais como papel como consequência da utilização da agenda física para comunicação

Solução:
* Aplicativo que permitirá aos professores enviarem recados e tarefas para os alunos
* Alunos (e responsáveis) poderão enviar feedbacks, receber informações do dia a dia, enviar mensagens aos professores/coordenadores
* Aplicação conterá interfaces que exibirão informações referentes aos alunos como: almoço, café da manhã, medicação (se foi administrada)
* Também estarão presentes interfaces para visualização das atividades enviadas por professores e feedbacks após entrega.

--- Atualizações que foram feitas ---
Estrutura dos diretórios foi alterada para permitir a integração do Expo Router a cada uma das interfaces (permitir navegação entre telas)

--- Informações sobre arquitetura, tecnologias, projeto e configuração ---

* Arquitetura utilizada: RBAC (Controle de acesso) com camadas para cada componente, serviço, rotas, comunicação com backend e banco de dados

* Estrutura dos arquivos:
/app                 # Contém todas as interfaces de usuário da aplicação (definida desta forma para melhor funcionamento do Expo Router)

/assets              # Pasta que armazena todos os arquivos relacionados a imagens, ícones, fontes e conteúdos de apresentação da UI

/src            
    /components      # Componentes reutilizáveis (ex: Botões ou trechos de código globais)
    /features        # Lógica de negócios por componentes (Autenticação, disciplinas, informação dos alunos, etc)
    /services        # Lógica de comunicação com a API

* Tecnologia e configuração:

JavaScropt - principal linguagem utilizada
React Native - Linguagem utilizada para as interfaces de usuário
Expo GO - Framework utilizado para o funcionamento do React Native e para as rotas entre telas (Expo Router)
Node.js - Tecnologia utilizada para as dependências do projeto e comunicação com o banco de dados (Backend)

Instalação do Node JS: https://nodejs.org/pt-br

Instalação do projeto:
npm install para instalar as dependências do projeto

npx expo start para iniciar o bundle do Expo GO (certifique-se de te-lo instalado no seu celular ou um emulador android)

    