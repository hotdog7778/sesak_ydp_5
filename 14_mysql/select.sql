use sesac;
show tables;

-- ORDER BY
-- ORDER BY 정렬이 없으면 기본적으로 기본키(PK) 기준 오름차순 정렬됩니다.
-- 정렬 기준을 잡은 항목이 서로 같다면, 같은 항목끼리는 기본키 기준으로 정렬한다.
SELECT * FROM customer;

SELECT * FROM customer
ORDER BY custname;

SELECT * FROM customer
ORDER BY custname DESC;

SELECT * FROM customer
WHERE custname LIKE '강%'
ORDER BY birth;

-- 정렬의 첫번째 기준은 addr, 두번째 기준은 custid, 세번째 기준은 PK
SELECT * FROM customer
WHERE birth >= '2000-01-01' ORDER BY addr desc, custid DESC;


-- 집계함수
-- 계산하여 어떤 값을 리턴하는 "함수"

-- 주문 테이블에서 총 판매 개수 검색
-- 주문 테이블에서 총 판매 개수 검색 + 의미있는 열이름으로 변경
select sum(amount) as 'total_amount' from orders;

-- 주문 테이블에서 총 판매 개수, 평균 판매 개수, 상품 최저가, 상품 최고가 검색
select sum(amount) as 'total_amount', avg(amount), min(price), max(price) from orders;

-- 주문 테이블에서 총 주문 건수 (= 튜플 개수)
select count(*) from orders;

-- 주문 테이블에서 주문한 고객 수 
select count(distinct custid) from orders;


-- GROUP BY
-- 고객별로 주문한 주문 건수 구하기
select * from orders;

select custid, count(*) from orders
group by custid;

-- 고객별로 주문한 상품 총 수량 구하기
select custid, sum(amount) from orders
group by custid; 

-- 고객별로 주문한 총 주문액 구하기
select * from orders;

select custid, sum(amount * price) from orders
group by custid;

-- 상품별로 판매 개수 구하기
select prodname, sum(amount) from orders
group by prodname;

-- HAVING
-- GROUP BY 절 이후 추가 조건
-- 그룹에 대해서 필터링 (WHERE은 행마다 필터링)
-- 집계함수 사용 가능

-- 총 주문액이 10000원 이상인 고객에 대해서 고객별로 주문한 상품 총 수량 구하기
select * from orders;

select custid, sum(amount) from orders
group by custid having sum(price * amount) >= 10000;
-- 단, custid가 'bunny' 인경우 제외
select custid, sum(amount) from orders
where custid != 'bunny'
group by custid 
having sum(price * amount) >= 10000;









