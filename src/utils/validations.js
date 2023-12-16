import * as Yup from 'yup';
const loginSchema = () => {
  return Yup.object().shape({
    username: Yup.string().required('Zorunlu Alan'),
    password: Yup.string().required('Zorunlu Alan'),
    passwordCheck: Yup.string().required('Zorunlu Alan'),
  });
};

const registerSchema = () => {
  return Yup.object().shape({
    username: Yup.string().required('Zorunlu Alan'),
    password: Yup.string().required('Zorunlu Alan'),
    passwordCheck: Yup.string().required('Zorunlu Alan')
    .oneOf([Yup.ref('password'), null], 'Şifreler eşleşmiyor'),
    firstname: Yup.string().required('Zorunlu Alan'),
    lastname: Yup.string().required('Zorunlu Alan'),
    email: Yup.string().required('Zorunlu Alan').email("Lütfen geçerli bir email giriniz"),
    phone: Yup.number("Litfen sgeçerli bir telefon numarası giriniz").min(9,"minimum 10 hane"),

  });
};
export {loginSchema,registerSchema};
