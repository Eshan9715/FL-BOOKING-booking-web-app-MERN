import * as yup from "yup";

 export const userSchema1 = yup.object().shape({
    name: yup.string().required('Please Enter your name'),
    companyName: yup.string().required('Please Enter your company name'),
    mobileNum: yup.string().matches(/^(?:0|94|\+94)?(?:|7(0|1|2|4|5|6|7|8)\d)\d{6}$/, 'Phone number is not valid').required('Please Enter your mobile number'),


 })

 export const userSchema2 = yup.object().shape({
   email: yup.string().email().matches( /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, "Valid email is required!").required('Please Enter your email'),
   password: yup.string().min(6,'Too Short!').max(10,'Too Long!').required('Please Enter your password'),
   confirmPassword: yup.string().required("Please Re-Enter your password").oneOf([yup.ref("password"), null], "Passwords must match"),
   
})

// export const userSchema3 = yup.object().shape({
//    preShipments: yup.string().required('Please Enter shipment experience'),
//    comdoType: yup.string().required('Please Enter frequient comodity type'),
//    shipDate: yup.string().required('Please Enter upcoming ship date'),

// })

export const userSchema5 = yup.object().shape({
   Containers: yup.array().of(
      yup.object().shape({
        containerType: yup.string().required("ContainerType required"),
        quantity: yup.string()
          .required("Container quantity required")
      }))

})

