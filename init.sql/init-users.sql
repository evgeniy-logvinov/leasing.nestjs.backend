TRUNCATE TABLE users CASCADE;
TRUNCATE TABLE leasing_base_user CASCADE;

INSERT INTO leasing_base_user ("role_id", "isAdmin", "type")
SELECT  "role".id, true, 'LeasingAdmin'
FROM    "role"
WHERE   "role"."name" = 'ROLE_ADMIN';

INSERT INTO "user" ( "leasingBaseUserId", "email" )
SELECT  "leasing_base_user".id, 'admin@mail.com'  
FROM    "leasing_base_user"
WHERE   "leasing_base_user"."isAdmin" is true;

INSERT INTO leasing_base_user ("role_id", "type")
SELECT  "role".id, 'LeasingCompany'
FROM    "role"
WHERE   "role"."name" = 'ROLE_LEASING_COMPANY';

INSERT INTO "user" ( "leasingBaseUserId", "email" )
SELECT  "leasing_base_user".id, 'company@mail.com'
FROM    "leasing_base_user"
WHERE   "leasing_base_user"."type" = 'LeasingCompany';

INSERT INTO leasing_base_user ("role_id", "type")
SELECT  "role".id, 'Client'
FROM    "role"
WHERE   "role"."name" = 'ROLE_LEASING_CLIENT';

INSERT INTO "user" ( "leasingBaseUserId", "email" )
SELECT  "leasing_base_user".id, 'client@mail.com'
FROM    "leasing_base_user"
WHERE   "leasing_base_user"."type" = 'Client';