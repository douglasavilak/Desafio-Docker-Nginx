# Desafio Nginx - FullCycle 2.0 / Docker
Este é um projeto de estudo do modulo Docker do curso FullCycle 2.0 da Code Education

Objetivo:
- Criar um ambiente docker que utilize um proxy reverso (nginx) para chamar uma aplicação node.js que salve e consulte nomes de usuarios em um banco de dados mysql.

Resolução:
- Container nginx como proxy reverso para o container node
- Container node contendo a aplicação
- Container mysql para uso do banco de dados
