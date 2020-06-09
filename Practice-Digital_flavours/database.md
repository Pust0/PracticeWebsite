# preparing Database

```sql
    CREATE DATABASE flavourdb;
    USE flavourdb;
    CREATE USER flavouruser IDENTIFIED BY 'flavourpass';
    grant all privileges on flavourdb to flavouruser;
    grant all privileges on flavourdb.* to flavouruser;
```