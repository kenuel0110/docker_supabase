Vault is a Postgres extension and accompanying Supabase UI that makes it safe and easy to store encrypted secrets and other data in your database. This opens up a lot of possibilities to use Postgres in ways that go beyond what is available in a stock distribution.

Under the hood, the Vault is a table of Secrets and Encryption Keys that are stored using Authenticated Encryption on disk. They are then available in decrypted form through a Postgres view so that the secrets can be used by applications from SQL. Because the secrets are stored on disk encrypted and authenticated, any backups or replication streams also preserve this encryption in a way that can't be decrypted or forged.