# Portfólio pessoal — CP4

Versão final do portfólio, com cinco páginas: Início, Currículo, Formulário, Multimídia e Gráficos.

## Bootstrap
Bootstrap 5.3.3 incluído por CDN nas cinco páginas, antes do CSS próprio. Classes utilizadas: `container` (organização responsiva), `rounded` (cantos arredondados) e `img-fluid` (imagem adaptável). O CSS próprio preserva a identidade visual. A CDN exige conexão com a internet.

## JavaScript e localStorage
O botão Tema claro/escuro está nas cinco páginas. A chave persistida é `tema`, com valores `claro` ou `escuro`. Para testar, altere o tema, pressione F5 e navegue para outra página; a preferência permanece. DevTools > Application > Local Storage permite inspecionar a chave.

## Formulário
Validação nativa HTML e feedback na tela. É uma demonstração: nenhum dado é enviado nem salvo.

## Acessibilidade
Idioma `pt-BR`, textos alternativos nas fotos, rótulos de navegação, foco visível ao usar Tab, Enter para abrir links e indicação da página atual. Os desenhos Canvas e SVG possuem descrição acessível. Contraste e responsividade devem ser conferidos em diferentes dispositivos e nos dois temas.

## Organização
- `css/estilos.css`: estilos, responsividade e foco
- `js/scripts.js`: tema e formulário
- `index.html`, `curriculo.html`, `formulario.html`, `multimidia.html`, `graficos.html`: páginas

## Publicação e entrega
Após testar localmente, fazer commit, merge na `main`, push, verificar GitHub Pages por HTTPS e criar/enviar a tag `cp4-entrega`. A tag `cp3-entrega` não deve ser apagada. Gravar vídeo narrado de 1min30s a 2min30s mostrando o site **publicado**. Entregar vídeo, repositório/tag e site no Blackboard.
