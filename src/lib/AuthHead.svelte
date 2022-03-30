
<script>
	import TopNavbar from "$lib/navigation/TopNavbar.svelte";
	import SideNavbar from "$lib/navigation/SideNavbar.svelte";
	import Footer from "$lib/navigation/Footer.svelte";
</script>

<!-- Head section -->
<svelte:head>
	<title>Destination Point</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta content="Premium Multipurpose Admin & Dashboard Template" name="description" />
	<meta content="Themesbrand" name="author" />
	<!-- App favicon -->
	<link rel="shortcut icon" href="/assets/images/favicon.ico">

	<!-- jsvectormap css -->
	<link href="/assets/libs/jsvectormap/css/jsvectormap.min.css" rel="stylesheet" type="text/css" />

	<!--Swiper slider css-->
	<link href="/assets/libs/swiper/swiper-bundle.min.css" rel="stylesheet" type="text/css" />

	<!-- Layout config Js -->
	<script src="/assets/js/layout.js"></script>
	<!-- Bootstrap Css -->
	<link href="/assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
	<!-- Icons Css -->
	<link href="/assets/css/icons.min.css" rel="stylesheet" type="text/css" />
	<!-- App Css-->
	<link href="/assets/css/app.min.css" rel="stylesheet" type="text/css" />
	<!-- custom Css-->
	<link href="/assets/css/custom.min.css" rel="stylesheet" type="text/css" />


	<!-- JAVASCRIPT -->
	<script src="/assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
	<script src="/assets/libs/simplebar/simplebar.min.js"></script>
	<script src="/assets/libs/node-waves/waves.min.js"></script>
	<script src="/assets/libs/feather-icons/feather.min.js"></script>
	<script src="/assets/js/pages/plugins/lord-icon-2.1.0.js"></script>
	<script src="/assets/js/plugins.js"></script>

	<!-- apexcharts -->
	<script src="/assets/libs/apexcharts/apexcharts.min.js"></script>

	<!-- Vector map-->
	<script src="/assets/libs/jsvectormap/js/jsvectormap.min.js"></script>
	<script src="/assets/libs/jsvectormap/maps/world-merc.js"></script>

	<!--Swiper slider js-->
	<script src="/assets/libs/swiper/swiper-bundle.min.js"></script>

	<!-- Dashboard init -->
	<script src="/assets/js/pages/dashboard-ecommerce.init.js"></script>

	<!-- App js -->
	<script src="/assets/js/app.js"></script>

	<!-- Firebase -->
<!--	<script type="module">-->
<!--		// Import the functions you need from the SDKs you need-->
<!--		import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";-->
<!--		import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js";-->
<!--		import { GoogleAuthProvider, getAuth, signInWithPopup } from "/firebase/auth";-->

<!--		const auth = getAuth();-->
<!--		auth.languageCode = 'en';-->
<!--		// To apply the default browser preference instead of explicitly setting it.-->
<!--		// firebase.auth().useDeviceLanguage();-->

<!--		//import { GoogleAuthProvider } from "firebase/auth";-->
<!--		const provider = new GoogleAuthProvider();-->
<!--		provider.addScope('https://www.googleapis.com/auth/contacts.readonly');-->

<!--		// TODO: Add SDKs for Firebase products that you want to use-->
<!--		// https://firebase.google.com/docs/web/setup#available-libraries-->

<!--		// Your web app's Firebase configuration-->
<!--		// For Firebase JS SDK v7.20.0 and later, measurementId is optional-->
<!--		const firebaseConfig = {-->
<!--			apiKey: "AIzaSyCP4RR-VU_f&#45;&#45;ih2Df54tdHCW73ono4IsY",-->
<!--			authDomain: "destination-point-54464.firebaseapp.com",-->
<!--			projectId: "destination-point-54464",-->
<!--			storageBucket: "destination-point-54464.appspot.com",-->
<!--			messagingSenderId: "754464964028",-->
<!--			appId: "1:754464964028:web:7e2abf8758d784651bffb9",-->
<!--			measurementId: "G-BSK23XKEMZ"-->
<!--		};-->

<!--		// Initialize Firebase-->
<!--		const app = initializeApp(firebaseConfig);-->
<!--		const analytics = getAnalytics(app);-->


<!--		signInWithPopup(auth, provider)-->
<!--				.then((result) => {-->
<!--					// This gives you a Google Access Token. You can use it to access the Google API.-->
<!--					const credential = GoogleAuthProvider.credentialFromResult(result);-->
<!--					const token = credential.accessToken;-->
<!--					// The signed-in user info.-->
<!--					const user = result.user;-->
<!--					// ...-->
<!--				}).catch((error) => {-->
<!--			// Handle Errors here.-->
<!--			const errorCode = error.code;-->
<!--			const errorMessage = error.message;-->
<!--			// The email of the user's account used.-->
<!--			const email = error.email;-->
<!--			// The AuthCredential type that was used.-->
<!--			const credential = GoogleAuthProvider.credentialFromError(error);-->
<!--			// ...-->
<!--		});-->


<!--		// Signup function-->
<!--		function signUp() {-->
<!--			const email = document.getElementById("email");-->
<!--			const password = document.getElementById("password");-->

<!--			const promise = auth.createUserWithEmailAndPassword(-->
<!--					email.value,-->
<!--					password.value-->
<!--			);-->
<!--			promise.catch((e) => alert(e.message));-->
<!--			alert("SignUp Successfully");-->
<!--		}-->

<!--		// SignIN function-->
<!--		function signIn() {-->
<!--			const email = document.getElementById("email");-->
<!--			const password = document.getElementById("password");-->
<!--			const promise = auth.signInWithEmailAndPassword(-->
<!--					email.value, password.value);-->
<!--			promise.catch((e) => alert(e.message));-->
<!--		}-->

<!--		// SignOut-->
<!--		function signOut() {-->
<!--			auth.signOut();-->
<!--			alert("SignOut Successfully from System");-->
<!--		}-->

<!--		// Active user to homepage-->
<!--		app.auth().onAuthStateChanged((user) => {-->
<!--			if (user) {-->
<!--				const email = user.email;-->
<!--				alert("Active user " + email);-->
<!--			} else {-->
<!--				alert("No Active user Found");-->
<!--			}-->
<!--		});-->
<!--	</script>-->
</svelte:head>