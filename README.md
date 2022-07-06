# Back-end para app de To Do List

Esse é o back-end usado para o app de To Do List.

[To Do List app aqui](https://github.com/gabrielmaia2/ToDo-List).

## Rotas

Os tipos das rotas estão no formato (tipo do request body) -> (tipo do response body).

`GET /lists/all`: Retorna lista de nomes de todo lists ({} -> { status: String, names: String\[\] }).
`GET /lists/allItems`: Retorna lista com todo lists e seus respectivos items ({} -> { status: String, lists: { name: String, items: { item: String, checked: boolean }\[\] }\[\] }).
`POST /lists/add`: Cria uma nova lista vazia ({ name: String } -> { status: String }).
`DELETE /lists/remove`: Remove uma lista ({ name: String } -> { status: String }).
`PUT /lists/editname`: Muda o nome de uma lista ({ name: String, newName: String } -> { status: String })

`GET /list/:name/get`: Retorna lista com nome e itens ({} -> { status: String, list: { name: String, items: { item: String, checked: boolean }\[\] } }).
`POST /list/:name/add`: Adiciona item na lista ({ item: String, checked: boolean } -> { status: String }).
`DELETE /list/:name/remove`: Remove item da lista ({ index: Number } -> { status: String }).
`PUT /list/:name/edit`: Edita item ({ index: Number, newItem: String } -> { status: String }).
`PUT /list/:name/check`: Alterna estado do item entre concluído ou não concluído ({ index: Number } -> { status: String }).
