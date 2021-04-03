# Api Usuarios

## Descripcion 
Una Api que devuelve los datos de unos usuarios. Cerca de mil registros son los que son almacenados en la base de datos.

## Endpoint
/users

## Get
Devuelve una lista de objetos con la siguiente estructura:
```
{
    id,
    name,
    last_name,
    year_old
}
```

### Sin parámetros 
Devuelve un límite de 25 usuarios
`/users`

### Con parámetros
Devuelve un límite que es enviado en la url
`/users?limit=50`

## Post
Se tiene que enviar cabecera `"Content-Type":"Application/json"`
Se tiene que enviar body
```
{
    "name":"", 
    "last_name":"",
    "year":""
}
```