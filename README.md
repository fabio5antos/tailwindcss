<h2>Veja a demo da página do Tutorial</h2>

[Demo](https://fabiosantos.dev/logintailwind/)

<h2>Comandos para configurar um projeto com o Framework TailWind</h2>

- Tenha instalado em sua máquina o NodeJS e o NPM

- Iniciar projeto criando o arquivo package.json
    "npm init -y"
- Instalar TailWind CSS

    "npm install tailwindcss"

- Criar arquivos index.html e main.css adicionando no arquivo main.css as linhas abaixo

```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

- Criar arquivo tailwind.config.css utilizando o comando abaixo

    "npx tailwindcss init"

- "Buidar" o arquivo style.css(arquivo gerado, após comando, contendo todos os estilos do TailWind CSS)

    - Use o comando "npx tailwindcss build main.css -o style.css"

- Faça seu layout respeitando toda a documentação do TailWind CSS

- Após concluir se quiser minificar seu CSS e Remover todo o CSS não utilizado siga os passos abaixo

- Instalar o POSTCSS-CLI

    - Obs: Se você tiver no Windows, lembre que de executar o PostCSS, após instalado direto da pasta do mesmo. Windows e seus problemas de permissões.
    - Se você tiver no Ubuntu, ou outra distribuição Linux, lembre de colocar o SUDO no comando de instalação do POSTCSS.

    Use o comando - npm install -g postcss-cli - para instalar o POSTCSS-CLI

- Instale o POSTCSS + CSSNANO e o @fullhuman/postcss-purgecss para fazer a minificação e remoção do CSS não utilizado
    
    - npm install postcss cssnano @fullhuman/postcss-purgecss --save-dev

- Após instalado crie o arquivo postcss.config.js e vamos montar a personalização para fazer a minificação e remoção do CSS não utilizado
    Edite o arquivo postcss.config.js deixando-o da mesma forma que está abaixo

```
    const purgecss = require('@fullhuman/postcss-purgecss')({

        // Specify the paths to all of the template files in your project 
        content: [
        './*.html'
        ],  
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
    
    module.exports = {
        plugins: [
        require('tailwindcss'),
        purgecss,
        require('cssnano'),
        require('autoprefixer')
        ]
    }
```

- Vá até o arquivo package.json, em "scripts" e adicione o script deixando como abaixo
```
    "scripts": {
        "build:css": "postcss style.css -o style.main.css"
    },
```

- Após fazer a personalização use o comando para realizar a minificação e remoção do CSS não utilizado

    npm run build:css

- Após rodar o comando acima deverá ser criado um arquivo style.main.css
- Faça a comparação de tamanho do arquivo Buildado style.css e do arquivo minificado e com o CSS não utilizado removido style.css.min. Altere o 

```
    <link rel="stylesheet" href="style.css"> 
```

    para 

```
    <link rel="stylesheet" href="style.main.css"> 
```

no index.html e veja que não mudará nada no seu site.




