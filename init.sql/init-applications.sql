TRUNCATE TABLE application CASCADE;

INSERT INTO "application" ("clientId", "isNew", "subjectOfLeasing", "brand", "model", "country", "releaseDate", "typeOfSupplier")
SELECT "leasing_user_info"."id", true, 'CAR', 'Skoda', 'Fabia', 'Чехия', TO_DATE('24.09.2012', 'DD.MM.YYYY'), 'OWNER'
FROM "leasing_user_info"
WHERE "leasing_user_info"."userId" = '13883097-2db5-421e-9a3c-7cd8e9e4994b'
