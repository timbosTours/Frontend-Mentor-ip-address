import * as Yup from 'yup'
import tldjs from 'tldjs'

// create rugular expressions to validate ip or domain address with Yup

// const ipRegex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
// const domainRegex = tldjs.isValidHostname


// export const validationSchema = Yup.object().shape({
//     inputValue: Yup.string()
//     .matches(ipRegex, 'Invalid IP address')
//     .matches(domainRegex, 'Invalid domain name')
//     .required('Input value is required'),
// });


// const ipRegex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
// const domainRegex = /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\]*[A-Za-z0-9])$/;

// export const validationSchema = Yup.object().shape({
//     inputValue: Yup.string()
//     .test('ip-or-domain', 'Invalid IP address or domain name', function (value) {
//         return !ipRegex.test(value) && !domainRegex.test(value);
//     })
//     .required('Input value is required'),
// });

// export const validationSchema = Yup.object().shape({
//     inputValue: Yup.string()
//         .oneOf([ipRegex, domainRegex], "Input should match either an IP address or a domain name")
//         .required("Input value is required"),
// });


