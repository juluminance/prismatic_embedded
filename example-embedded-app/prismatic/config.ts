/**
 * Update the values below with your own Prismatic organization ID, customer external ID, user ID and signing secret.
 * See https://prismatic.io/docs/installing-embedded/ for information on how to get these values.
 */

import { PrismaticConfig } from './types';

/**
 * Replace this with a value a signing key you get from https://app.prismatic.io/settings/embedded/
 */
const signingKey = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCTLGOeHqBpaZkO
N3dsZorjlQv0R6qHHHqLrUo465sl+vPy3Mbgt4G6sJ+ntRzyUdrYUJbiBUUn/1hV
W9u7zxzgO8X5QXYvdSKiQT8cEJ6ISuC92w/NMjMpdUKrhKmuq4KlApu30b3yPT7H
7gLHJzSPg9dRtx/qNxebLcbgNRb1onXd1qsO324lRFNOBGxubabQURqzda3v1a6T
kCrArrnc+77s50thhLSMOMCWkYgjdbGZbM++gjGnWLgA3VvbHDKoGAK1efPfnGVE
N/AEZX/sVdDQLTcL9G1byTid8VdI4sKPzatn8+dVS+dbquzTsw4Bex6LNvBXGWBu
8l1DJY7VAgMBAAECggEAHoouC9BAKk+q3pvc8MYgmRRDPEgo10uuFFD7327orYtz
VtjAfj4mMfbX0oXPQWuB9bRXcwRz8tZWXrQml0TlsZRFwzD11OhCLRhL/8dlFlQv
acZM86AwpLA8CvqG+YOGozY02QKxn1RdNECsG+aDTiqmIkNVYJVZFS79H2Z04rio
hirXoxS3EwHOqyxkVtfDqLbHfvGoqngFJQxo10cWptw1w+kGzLNcFp1xKdX84Ghw
Ec7O1xmiwFHriSHkigQqoxixe4F05U0Tqw9c1Hb15lMgtkS3iw7VhAfJPo6w4Klw
DHef8HBkVjZQMQ2NYRgeYxnNxDT75Jaenvxy2swMAQKBgQDLcyOawOKbMy9u/rT8
W9pWEuwQRVnj57YBIRlMChAT71Jdy7zzIPXwvk+yt7pnw2/S8d21HUnaiv+Mwopd
5JvfJ3shohOYVgURZQ1Qbr0T+s2roe7Q8CXvTN1+sfyKvCpWx8LcLGJh3vwhYzmf
thTEnBLdtWvBXbTNVf38NC1SAQKBgQC5MAuzgxfv9+jxgYXUg6G8FdnSf8gV0M4l
ztMJEuDpJo95lHe6JxXjm7vchH2al+MmHbYm7uE+T4c0zh+u8y8w3ssoNXHQX+L2
w7rIBbQfmxv7BpeEKm0JvI8kwIoV8raoMKxjk2Vh/Gczrjk3OtL53nslV5dlbAD/
+/RfaohU1QKBgFHIujJWgYGUJOhAma6smetp9d1gk48LMV3o2Ut47BenZ/vuj8lI
obUiO9WDB/r4VHZ+5foNiQfCQpJqDcdKw+ID8/qENc5SHf1tGtoPehCTDKSHFwKE
1ysIQi3RDM0UcQyrhsiNSws+4Snmwl5SiqyydN8NNADqU2kLvWrp6qIBAoGBAIJq
zbLMXe1HwCtktiVl1l8pXE+cYgLLHIMP1xuKyg4oc96BqpfUstuqb3DrdbGLyhKr
1f4xOTuysluD1lhVNyTJonVcvhyriqGSUlZPffzMNbZhfA89+bBjtMODPTwbxHtK
W/18bmfFY8DHr8+vg6ko/7zapOpuV33vqLgRxJVJAoGAWjbDqRrlEDJEZN4vzygP
JQVgcKnLryeNpBh+UwB78GZNRV7oSLouqZIBalXJ5Ez8l7aKqLP3wJzmxXcGorpx
jQz9r2Nbjviv/jJO7DKqI7OFNmMhIPAeRlyTnqj4OCeEsxs61+jASt2lKSFQQBw1
M5NZWM6Ru29LX6c2RenUP44=
-----END PRIVATE KEY-----`;

const config: PrismaticConfig = {

  prismaticUrl: 'https://app.luminance-production-eu-central-1.prismatic.io/',
  sub: '00000000-0000-0000-0000-000000000000',
  organization: 'T3JnYW5pemF0aW9uOmM5NDA4ZjVjLTQ0NWMtNDdkOS1iZTQ3LTVlZDg3OTE4N2VlMA==',
  external_id: 'Acme',
  customer: 'Acme',
  customerName: 'Acme',
  name: 'Acme User',
  signingKey,
  role: 'admin',
  tokenValidSeconds: 43201
};

export default config;
