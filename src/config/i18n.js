import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          header: {
            logo: "E-commerce",
            search: "search...",
            signIn: "Sign-in",
            signUp: "Sign-up",
            settings: "Settings",
            store: "Store",
            cart: "Cart",
            logout: "Logout",
            darkmode: "Dark mode",
          },
          footer: {
            signUp: "Sign up for our newsletter",
            sub: "subscribe",
            placeholder: "Email address",
            loremIpsum: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam sequi voluptate quas.`,
            links: {
              1: "Home",
              2: "Store",
              3: "cart",
              4: "edit account",
              5: "sign-in",
              6: "sign-up",
              7: "admin Dashboard",
              8: "E-commerce",
              9: "Facebook",
              10: "Instagram",
              11: "LinkedIn",
              12: "Codepen",
              13: "CodeSandBox",
              14: "GeeksForGeeks",
              15: "Twitter",
              16: "Telegram",
            },
            copyright: "© 2022 Copyright:abd alrhman babelly",
          },
          signInPage: {
            editAccountTitle : "Edit-account",
            title: "Sign-In",
            username: "Username",
            password: "Password",
            rememberMe: "Remember Me",
            signInBtn: "sign in",
            forgot: "Forgot password?",
            dontHaveAccount: "Don't have an account? Sign Up",
            copyright: "Copyright © Ecommerce",
          },
          signUpPage: {
            delete : "delete",
            update : "update",
            editAccountTitle : "Edit-Account",
            personalInfo: "Personal info",
            address: "Adderss",
            password: "Password",
            title: "Sign-Up",
            username: "Username",
            password: "Password",
            firstname: "First Name",
            lastname: "Last Name",
            email: "Email Address",
            city: "City",
            street: "Street",
            long: "Long",
            lat: "Lat",
            number: "Number",
            zipcode: "Zipcode",
            phone: "Phone",
            iAccept: "I accept the condition and terms of using this app.",
            submit: "submit",
            back: "back",
            next: "next",
            alreadyHaveAccount: "Already have an account? Sign in",
            copyright: "Copyright © Ecommerce",
            reqField: "this filed is required",
            fnameErr1: "firstname Must be less than 20 characters",
            fnameErr2: "firstname Must be more than 3 characters",
            lnameErr1: "lastname Must be less than 20 characters",
            lnameErr2: "lastname Must be more than 3 characters",
            emailErr: "please enter valid email",
            cityErr1: "city Must be less than 20 characters",
            cityErr2: "city Must be more than 3 characters",
            streetErr1: "street Must be less than 20 characters",
            streetErr2: "street Must be more than 3 characters",
            usernameErr1: "username Must be less than 10 characters",
            usernameErr2: "username Must be more than 3 characters",
            passwordErr1: "password Must be less than 10 characters",
            passwordErr2: "password Must be more than 3 characters",
          },
          adminDashboard : {
            title : "Dashboard",
            nav : {
              "1" : "Products",
              "2" : "Users",
              "3" : "Carts",
              "4" : "Categories",
            }
          }
        },
      },
      ar: {
        translation: {
          header: {
            logo: "متجر",
            search: "ابحث...",
            signIn: "تسجيل الدخول",
            signUp: "انشئ حساب",
            settings: "الاعدادات",
            store: "المتجر",
            cart: "السلة",
            logout: "تسجيل خروج",
            darkmode: "الوضع الليلي",
          },
          footer: {
            signUp: "سجل الدخول لتصلك رسائلنا",
            sub: "اشترك",
            placeholder: "البريد الالكتروني",
            loremIpsum: `لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي.`,
            links: {
              1: "الصفحة الرئيسية",
              2: "المتجر",
              3: "السلة",
              4: "الاعدادات",
              5: "سجل الدخول",
              6: "انشئ حساب",
              7: "لوحة التحكم",
              8: "متجر",
              9: "فايسبوك",
              10: "انستغرام",
              11: "لنكدان",
              12: "كودبن",
              13: "كودساندبوكس",
              14: "غييكس فور غييكس",
              15: "تويتور",
              16: "تلغرام",
            },
            copyright: "© 2022 جمبع الحقوق المحفوظة",
          },
          signInPage: {
            title: "تسجيل الدخول",
            username: "اسم المستخدم",
            password: "كلمة السر",
            rememberMe: "تذكرني",
            signInBtn: "تسجيل الدخول",
            forgot: "هل نسيت كلمة السر ؟",
            dontHaveAccount: "لا تملك حسابا ؟",
            copyright: "جميع الحقوق المحفوظة ©",
          },
          signUpPage: {
            delete : "حذف",
            update : "تحديث",
            editAccountTitle : "تعديل الحساب",
            personalInfo: "معلومات شخصية",
            address: "العنوان",
            password: "كلمة السر",
            title: "انشاء الحساب",
            username: "اسم المستخدم",
            firstname: "الاسم الأول",
            lastname: "الأسم الأخير",
            email: "البريد الإلكتروني",
            city: "المدينة",
            street: "الشارع",
            long: "طويل",
            lat: "عريض",
            number: "الرقم",
            zipcode: "الكود",
            phone: "رقم الجوال",
            iAccept: "أنا أقبل الشروط لإنشاء الحساب",
            submit: "أرسل",
            back: "السابق",
            next: "التالي",
            alreadyHaveAccount: "تملك حساب بالفعل",
            copyright: "جميع الحقوق المحفوظة ©",
            reqField: "هذا الحقل مطلوب",
            fnameErr1: "يجب أن يكون عدد الاحرف أقل من 20",
            fnameErr2: "يجب أن يكون عدد الاحرف أكثر من 3",
            lnameErr1: "يجب أن يكون عدد الاحرف أقل من 20",
            lnameErr2: "يجب أن يكون عدد الاحرف أكثر من 3",
            emailErr: "الرجاء ادخال بريد الكتروني صحيح",
            cityErr1: "يجب أن يكون عدد الاحرف أقل من 20",
            cityErr2: "يجب أن يكون عدد الاحرف أكثر من 3",
            streetErr1: "يجب أن يكون عدد الاحرف أقل من 20",
            streetErr2: "يجب أن يكون عدد الاحرف أكثر من 3",
            usernameErr1: "يجب أن يكون عدد الاحرف أقل من 10",
            usernameErr2: "يجب أن يكون عدد الاحرف أكثر من 3",
            passwordErr1: "يجب أن يكون عدد الاحرف أقل من 10",
            passwordErr2: "يجب أن يكون عدد الاحرف أكثر من 3",
          },
          adminDashboard : {
            title : "لوحة التحكم",
            nav : {
              "1" : "المنتجات",
              "2" : "المستخدمين",
              "3" : "السلات",
              "4" : "الأصناف",
            }
          }
        },
      },
    },
  });

export default i18n;