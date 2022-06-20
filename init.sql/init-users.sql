INSERT INTO leasing_base_user ("role_id", "isAdmin", "type")
SELECT  "role".id, true, 'LeasingAdmin'
FROM    "role"
WHERE   "role"."name" = 'ROLE_ADMIN';

INSERT INTO "user" ( "leasingBaseUserId", "email", "password", "salt" )
SELECT  "leasing_base_user".id, 'admin@mail.ru', 'admin', 'salt'
FROM    "leasing_base_user"
WHERE   "leasing_base_user"."isAdmin" is true;