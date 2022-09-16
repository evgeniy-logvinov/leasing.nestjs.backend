TRUNCATE TABLE application CASCADE;

INSERT INTO "application" ("clientId", "isNew", "subjectOfLeasing", "brand", "model", "country", "releaseDate", "typeOfSupplier")
SELECT "leasing_user_info"."id", true, 'CAR', 'Skoda', 'Fabia', 'Чехия', TO_DATE('24.09.2012', 'DD.MM.YYYY'), 'OWNER'
FROM "leasing_user_info"
WHERE "leasing_user_info"."userId" = '13883097-2db5-421e-9a3c-7cd8e9e4994b'

-- [
--     {
--         "id": "6def2c38-66ce-4f88-823a-5204c1a70607",
--         "isNew": false,
--         "isReturnable": false,
--         "subjectOfLeasing": "CAR",
--         "brand": "Fabia 2",
--         "model": "Granta",
--         "country": "Rissia",
--         "releaseDate": "2011-12-19T15:28:46.493Z",
--         "typeOfSupplier": "OWNER",
--         "ndsPayer": false
--     },
--     {
--         "id": "f611ea71-c2d5-4344-a6ec-efee6d3bf2cc",
--         "isNew": false,
--         "isReturnable": false,
--         "subjectOfLeasing": "CAR",
--         "brand": "Fabia 3",
--         "model": "Granta",
--         "country": "Chezh",
--         "releaseDate": "2011-12-19T15:28:46.493Z",
--         "typeOfSupplier": "OWNER",
--         "ndsPayer": false
--     }
-- ]
