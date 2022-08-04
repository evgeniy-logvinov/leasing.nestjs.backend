INSERT INTO "debt_burden" (
    "clientId",
    "typeOfCommitment",
    "typeDebtBurden",
    "issueDate",
    "summ",
    "maturityDate",
    "remainingMaturityDate",
    "averageMonthlyPayment",
    "balanceAtLastReportingDate",
    "balanceAsOfCurrentDate",
    )
SELECT
    "client".id,
    "CREDIT",
    "LEASING",
    "24.08.2022", 
    "4000", 
    "24.08.2022", 
    "5000", 
    "5001", 
    "5002", 
FROM    "client"
-- TODO
WHERE   "client"."id" = '11111111';

INSERT INTO "register_of_current_contracts" (
    "clientId",
    "startDate",
    "endDate",
    "summOfAgreement",
    "scopeOfWorkPerformed",
    "amountOfPaidWork",
    )
SELECT
    "client".id,
    "24.08.2022", 
    "24.08.2022", 
    "4000", 
    "5000", 
    "5001", 
FROM    "client"
-- TODO
WHERE   "client"."id" = '11111111';



INSERT INTO "balance_history_two_months" (
    "currentYear",
    "previousYear",
    "id"
)
VALUES (
    "2022",
    "2021",
    "testid"
)


INSERT INTO "profit_and_loss_statement" (
    "clientId",
    "revenue",
    "costOfSales",
    "grossProfit",
    "commercialExpenses",
    "managementExpenses",
    "profitFromSales",
    "incomeFromParticipation",
    "interestReceivable",
    "interestPayable",
    "otherIncome",
    "otherExpenses",
    "profitBeforeTax",
    "currentIncomeTax",
    "changeInDeferredTaxLiabilities",
    "changeInDeferredTaxAssets",
    "other",
    "netProfit",
    )
SELECT
    "client".id,
    "24.08.2022", 
    "24.08.2022", 
    "4000", 
    "5000", 
    "5001", 
FROM    "client"
-- TODO
WHERE   "client"."id" = '11111111';