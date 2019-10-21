
# Amaris API Users

## Inicializar

```sh
cp example.env .env
```

## Subir servicio

```sh
docker-compose up
```

## Bajar servicio

```sh
docker-compose down
```

## Uso

### Obtener todos 

GET /

```sh
curl -X GET \
  http://localhost:4000/ \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Host: localhost:4000' \
  -H 'Postman-Token: 4e52c860-7f14-4aa6-b896-5a9cb7952e86,5b9400d5-bb55-43ab-b8e9-92131ec28b48' \
  -H 'User-Agent: PostmanRuntime/7.17.1' \
  -H 'cache-control: no-cache'
```

### Crear 

POST /

```sh
curl -X POST \
  http://localhost:4000/ \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Length: 117' \
  -H 'Content-Type: application/json' \
  -H 'Host: localhost:4000' \
  -H 'Postman-Token: 1afaeae4-6f51-4f83-ae84-a6c63188c6b1,3fc55543-7112-4a9d-94d8-0a8cbd003bf3' \
  -H 'User-Agent: PostmanRuntime/7.17.1' \
  -H 'cache-control: no-cache' \
  -d '{
    "name": "Pablo Rebolledo",
    "email": "pablo.rebolledo@amaris.com",
    "address": "abc"
}'
```

### Obtener 

GET /:id

```sh
curl -X GET \
  http://localhost:4000/5dae1691d22be600779f7f95 \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Host: localhost:4000' \
  -H 'Postman-Token: a119f614-a1b4-4452-ae0a-40a006a50b2d,1b4f354c-5305-4b0a-b224-e095d5867512' \
  -H 'User-Agent: PostmanRuntime/7.17.1' \
  -H 'cache-control: no-cache'
```

### Modificar

PUT /:id

```sh
curl -X PUT \
  http://localhost:4000/5dae1691d22be600779f7f95 \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Length: 35' \
  -H 'Content-Type: application/json' \
  -H 'Host: localhost:4000' \
  -H 'Postman-Token: 4d0d7925-888d-407f-a4b1-f30084094f02,0c3ea525-7bb1-4726-8692-18c9179cc984' \
  -H 'User-Agent: PostmanRuntime/7.17.1' \
  -H 'cache-control: no-cache' \
  -d '{
    "address": "Otra direccion"
}'
```

### Desactivar 

PUT /:id

```sh
curl -X PUT \
  http://localhost:4000/5dae1691d22be600779f7f95 \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Length: 23' \
  -H 'Content-Type: application/json' \
  -H 'Host: localhost:4000' \
  -H 'Postman-Token: 16d1ec00-7c61-4743-9e89-4f493e80ccbe,38c0645a-6e42-4d34-80ea-7971b210d552' \
  -H 'User-Agent: PostmanRuntime/7.17.1' \
  -H 'cache-control: no-cache' \
  -d '{
    "active": false
}'
```

### Eliminar  

DELETE /:id

```sh
curl -X DELETE \
  http://localhost:4000/5dae1691d22be600779f7f95 \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Length: 0' \
  -H 'Content-Type: application/json' \
  -H 'Host: localhost:4000' \
  -H 'Postman-Token: 1f699f2d-9e98-4105-819b-34a631229c52,ebe8043e-55cd-424c-9f70-349c62c82cb4' \
  -H 'User-Agent: PostmanRuntime/7.17.1' \
  -H 'cache-control: no-cache'  
```