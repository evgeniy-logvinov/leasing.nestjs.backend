TRUNCATE TABLE debt_burden CASCADE;
TRUNCATE TABLE register_of_current_contracts CASCADE;
TRUNCATE TABLE balance_history_two_months CASCADE;
TRUNCATE TABLE profit_and_loss_statement CASCADE;

INSERT INTO "debt_burden" ("clientId", "typeOfCommitment", "typeDebtBurden", "issueDate", "summ", "maturityDate", "remainingMaturityDate", "averageMonthlyPayment", "balanceAtLastReportingDate", "balanceAsOfCurrentDate")
SELECT "leasing_user_info"."id", 'CREDIT', 'LEASING', TO_DATE('24.08.2022', 'DD.MM.YYYY'), '4000', TO_DATE('25.08.2022', 'DD.MM.YYYY'), TO_DATE('26.08.2022', 'DD.MM.YYYY'), '5000', 6000, '7000'
FROM "leasing_user_info"
WHERE "leasing_user_info"."userId" = '13883097-2db5-421e-9a3c-7cd8e9e4994b';

INSERT INTO "register_of_current_contracts" (
    "clientId",
    "startDate",
    "endDate",
    "summOfAgreement",
    "scopeOfWorkPerformed",
    "amountOfPaidWork"
)
SELECT
    "leasing_user_info"."id",
    TO_DATE('24.09.2022', 'DD.MM.YYYY'), 
    TO_DATE('25.09.2022', 'DD.MM.YYYY'),
    '4000', 
    '5000', 
    '5001'
FROM "leasing_user_info"
WHERE "leasing_user_info"."userId" = '13883097-2db5-421e-9a3c-7cd8e9e4994b';

-- REVENUE
INSERT INTO "balance_history_two_months" (
    "currentYear",
    "previousYear",
    "id"
)
VALUES (
    '1000',
    '1100',
    'b98eec27-007b-488e-ac8b-d110502c6f1a'
);

-- COST OF SALES
INSERT INTO "balance_history_two_months" (
    "currentYear",
    "previousYear",
    "id"
)
VALUES (
    '2000',
    '2100',
    'b98eec27-007b-488e-ac8b-d110502c6f2a'
);

-- GROSS PROFIT
INSERT INTO "balance_history_two_months" (
    "currentYear",
    "previousYear",
    "id"
)
VALUES (
    '3000',
    '3100',
    'b98eec27-007b-488e-ac8b-d110502c6f3a'
);

-- COMMERCIAL EXPENSES
INSERT INTO "balance_history_two_months" (
    "currentYear",
    "previousYear",
    "id"
)
VALUES (
    '4000',
    '4100',
    'b98eec27-007b-488e-ac8b-d110502c6f4a'
);

-- MANAGEMENT EXPENSES
INSERT INTO "balance_history_two_months" (
    "currentYear",
    "previousYear",
    "id"
)
VALUES (
    '5000',
    '5100',
    'b98eec27-007b-488e-ac8b-d110502c6f5a'
);

-- PROFIT FROM SALES
INSERT INTO "balance_history_two_months" (
    "currentYear",
    "previousYear",
    "id"
)
VALUES (
    '6000',
    '6100',
    'b98eec27-007b-488e-ac8b-d110502c6f6a'
);

-- INCOME FROM PARTICIPATION
INSERT INTO "balance_history_two_months" (
    "currentYear",
    "previousYear",
    "id"
)
VALUES (
    '7000',
    '7100',
    'b98eec27-007b-488e-ac8b-d110502c6f7a'
);

-- INTEREST RECEIVABLE
INSERT INTO "balance_history_two_months" (
    "currentYear",
    "previousYear",
    "id"
)
VALUES (
    '8000',
    '8100',
    'b98eec27-007b-488e-ac8b-d110502c6f8a'
);

-- INTEREST PAYABLE
INSERT INTO "balance_history_two_months" (
    "currentYear",
    "previousYear",
    "id"
)
VALUES (
    '9000',
    '9100',
    'b98eec27-007b-488e-ac8b-d110502c6f9a'
);

-- OTHER INCOME
INSERT INTO "balance_history_two_months" (
    "currentYear",
    "previousYear",
    "id"
)
VALUES (
    '10000',
    '10100',
    'b98eec27-007b-488e-ac8b-d110502d6f0a'
);

-- OTHER EXPENSES
INSERT INTO "balance_history_two_months" (
    "currentYear",
    "previousYear",
    "id"
)
VALUES (
    '11000',
    '11100',
    'b98eec27-007b-488e-ac8b-d110502d6f1a'
);

-- PROFIT BEFORE TAX
INSERT INTO "balance_history_two_months" (
    "currentYear",
    "previousYear",
    "id"
)
VALUES (
    '12000',
    '12100',
    'b98eec27-007b-488e-ac8b-d110502d6f2a'
);

-- CURRENT INCOME TAX
INSERT INTO "balance_history_two_months" (
    "currentYear",
    "previousYear",
    "id"
)
VALUES (
    '13000',
    '13100',
    'b98eec27-007b-488e-ac8b-d110502d6f3a'
);

-- CHANGE INDEFERRED TAX LIABILITIES
INSERT INTO "balance_history_two_months" (
    "currentYear",
    "previousYear",
    "id"
)
VALUES (
    '14000',
    '14100',
    'b98eec27-007b-488e-ac8b-d110502d6f4a'
);

-- CHANGE INDEFERRED TAX ASSETS
INSERT INTO "balance_history_two_months" (
    "currentYear",
    "previousYear",
    "id"
)
VALUES (
    '15000',
    '15100',
    'b98eec27-007b-488e-ac8b-d110502d6f5a'
);

-- OTHER
INSERT INTO "balance_history_two_months" (
    "currentYear",
    "previousYear",
    "id"
)
VALUES (
    '16000',
    '16100',
    'b98eec27-007b-488e-ac8b-d110502d6f6a'
);

-- NET PROFIT
INSERT INTO "balance_history_two_months" (
    "currentYear",
    "previousYear",
    "id"
)
VALUES (
    '17000',
    '17100',
    'b98eec27-007b-488e-ac8b-d110502d6f7a'
);

INSERT INTO "profit_and_loss_statement" (
    "clientId",
    "revenueId",
    "costOfSalesId",
    "grossProfitId",
    "commercialExpensesId",
    "managementExpensesId",
    "profitFromSalesId",
    "incomeFromParticipationId",
    "interestReceivableId",
    "interestPayableId",
    "otherIncomeId",
    "otherExpensesId",
    "profitBeforeTaxId",
    "currentIncomeTaxId",
    "changeInDeferredTaxLiabilitiesId",
    "changeInDeferredTaxAssetsId",
    "otherId",
    "netProfitId"
    )
SELECT
    "leasing_user_info"."id",
    'b98eec27-007b-488e-ac8b-d110502c6f1a', 
    'b98eec27-007b-488e-ac8b-d110502c6f2a', 
    'b98eec27-007b-488e-ac8b-d110502c6f3a',
    'b98eec27-007b-488e-ac8b-d110502c6f4a',
    'b98eec27-007b-488e-ac8b-d110502c6f5a',
    'b98eec27-007b-488e-ac8b-d110502c6f6a',
    'b98eec27-007b-488e-ac8b-d110502c6f7a',
    'b98eec27-007b-488e-ac8b-d110502c6f8a',
    'b98eec27-007b-488e-ac8b-d110502c6f9a',
    'b98eec27-007b-488e-ac8b-d110502d6f0a',
    'b98eec27-007b-488e-ac8b-d110502d6f1a',
    'b98eec27-007b-488e-ac8b-d110502d6f2a',
    'b98eec27-007b-488e-ac8b-d110502d6f3a',
    'b98eec27-007b-488e-ac8b-d110502d6f4a',
    'b98eec27-007b-488e-ac8b-d110502d6f5a',
    'b98eec27-007b-488e-ac8b-d110502d6f6a',
    'b98eec27-007b-488e-ac8b-d110502d6f7a'
FROM "leasing_user_info"
WHERE "leasing_user_info"."userId" = '13883097-2db5-421e-9a3c-7cd8e9e4994b';

{
--   "id": "string",
  "site": "http://www.spb.ru",
  "inn": 12345678910,
  "ogrn": 1234567891011,
  "kpp": 1234567891011,
  "fullName": "string",
  "shortName": "string",
  "actualAddress": {
    "id": "string",
    "index": 0,
    "regionId": "string",
    "cityId": "string",
    "district": "string",
    "street": "string",
    "house": "string",
    "corpus": "string",
    "building": "string",
    "litera": "string",
    "number": "string"
  },
  "actualSameWithLegal": true,
  "legalAddress": {
    "id": "string",
    "index": 0,
    "regionId": "string",
    "cityId": "string",
    "district": "string",
    "street": "string",
    "house": "string",
    "corpus": "string",
    "building": "string",
    "litera": "string",
    "number": "string"
  },
  "postAddress": {
    "id": "string",
    "index": 0,
    "regionId": "string",
    "cityId": "string",
    "district": "string",
    "street": "string",
    "house": "string",
    "corpus": "string",
    "building": "string",
    "litera": "string",
    "number": "string"
  },
  "postSameWithLegal": true,
  "postSameWithActual": true,
  "email": "string",
  "generalManager": {
    "id": "string",
    "firstName": "string",
    "secondName": "string",
    "patronymic": "string"
  },
  "phone": "string",
  "taxationSystemId": "string",
  "mainActivityByOkvdId": "string",
  "actualActivityByOkvdIds": [
    "string"
  ],
  "registrationDate": "string",
  "businessStartDate": "string",
  "businessStartSameWithRegistration": true,
  "founders": [
    "string"
  ],
  "guaranteeOfGD": true,
  "type": "NONE",
  "guarantor": {
    "id": "string",
    "site": "string",
    "inn": 0,
    "ogrn": 0,
    "kpp": 0,
    "fullName": "string",
    "shortName": "string",
    "actualAddress": {
      "id": "string",
      "index": 0,
      "regionId": "string",
      "cityId": "string",
      "district": "string",
      "street": "string",
      "house": "string",
      "corpus": "string",
      "building": "string",
      "litera": "string",
      "number": "string"
    },
    "actualSameWithLegal": true,
    "legalAddress": {
      "id": "string",
      "index": 0,
      "regionId": "string",
      "cityId": "string",
      "district": "string",
      "street": "string",
      "house": "string",
      "corpus": "string",
      "building": "string",
      "litera": "string",
      "number": "string"
    },
    "postAddress": {
      "id": "string",
      "index": 0,
      "regionId": "string",
      "cityId": "string",
      "district": "string",
      "street": "string",
      "house": "string",
      "corpus": "string",
      "building": "string",
      "litera": "string",
      "number": "string"
    },
    "postSameWithLegal": true,
    "postSameWithActual": true,
    "email": "someemail@mail.com",
    "generalManager": {
      "id": "string",
      "firstName": "string",
      "secondName": "string",
      "patronymic": "string"
    },
    "phone": "string",
    "taxationSystemId": "string",
    "mainActivityByOkvdId": "string",
    "actualActivityByOkvdIds": [
      "string"
    ],
    "registrationDate": "string",
    "businessStartDate": "string",
    "businessStartSameWithRegistration": true,
    "founders": [
      "string"
    ]
  },
  "clientId": "15e6648e-8693-4907-874f-8a575c66ce08"
}