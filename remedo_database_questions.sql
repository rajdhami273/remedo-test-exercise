select u.user_id, u.address, t.total_invoice_amount, t.invoice_amount_paid, t.remedo_commission from users u inner join transactions t on u.user_id=t.user_id where user_id='u1';
select sum(remedo_commission) from transactions where user_id='u1';
select * from users where user_id not in (select user_id from user_extra_info);
select * from users where user_id in (select user_id from user_extra_info);
select * from users where user_id in (select user_id from transactions) and user_id not in (select users_id from user_extra_info);
