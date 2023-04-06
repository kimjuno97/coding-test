-- 코드를 입력하세요
SELECT
    WAREHOUSE_ID, WAREHOUSE_NAME, ADDRESS, coalesce(FREEZER_YN,'N') as FREEZER_YN
FROM
    FOOD_WAREHOUSE
WHERE
    WAREHOUSE_NAME like '%경기%'

# coalesce란?
# 0번인덱스 부터 확인해서 가로안에 있는 값을 Null이 아닌거를 return 해줌.
