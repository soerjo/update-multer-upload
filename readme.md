# upload file

this project is for handle upload file in anoa and other compro banner.

## project lib:

- Fastify
- mysql2
- joi
- axios

## route

- [POST] | {{HOST}}/api/banner/v01/upload
- [GET] | {{HOST}}/api/banner/v01/list
- [POST] | {{HOST}}/api/banner/v01/change
- [GET] | {{HOST}}/api/banner/v01/inactive?tablebannerindex={{BANNER_INDEX}}

## note

- the main sourch code that make this repo works in:
  ./src/module/banner/banner.route.js
