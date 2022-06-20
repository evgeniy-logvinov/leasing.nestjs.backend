INSERT INTO "role_permissions_permission" ("roleId", "permissionId")
SELECT "role"."id", "permission"."id"
FROM "role", "permission"
WHERE "role"."name" = 'ROLE_ADMIN'
AND "permission"."name" in ('USERS', 'STATISTICS', 'ORDERS')

-- SELECT "role"."name", "permission"."name"
-- FROM "role", "permission", "role_permissions_permission"
-- WHERE "role"."id" = "role_permissions_permission"."roleId"
-- AND "role_permissions_permission"."permissionId" = "permission"."id"
