const Blog = () => {
	return (
		<div className='container my-5'>
			<div className='row justify-content-center'>
				<div className='col-sm-12 col-md-8'>
					<article className='my-3'>
						<h3 className='text-secondary'>
							Q: Difference between JS and Node.js?
						</h3>
						<p className='lead'>
							JavaScript is a scripting language which is mainly run on browser.
							It is invented by Brendan Eich. JavaScript can run any browser
							though every browser is generally used their own engine for this,
							like Chrome used V8 engine for JavaScript. JavaScript have so many
							framework. It is updated and maintained by ECMA
						</p>
						<p className='lead'>
							Node.js is an interpreter envrionment for JavaScript which is a
							cross-platrom and opensource that allow JavaScript run on server
							side. It is V8 engine which is developed and maintained by big
							tech company Google. Node.js comes with a bunch of libraries for
							using JavaScript as a server side programming language. Node.js is
							written by C, C++ and JavaScript.
						</p>
					</article>
					<article className='my-3'>
						<h3 className='text-secondary'>
							Q: When should we use Node.js and MongoDB?
						</h3>
						<p className='lead'>
							Node.js is an open source, server side language that is mainly
							depends on V8 engine which is cereated and maintained by big giant
							tech group google.It is lightweight, very quick and highly
							scalabale programming language. It is wirtten by Ryan Dahl. It's
							work as asynchronous way. So when we try to build large and
							scalabale application, most of the programmer nowdays choose
							Node.js for this kind of application.
						</p>
						<p className='lead'>
							Generally, we divided database in two categories. One is the SQL
							(Structured Query Language) and another is the NoSQL (Non
							Structured Query Language). NoSQL is greater than SQL some
							particular points like when we need to accommodate massive scale,
							when we are rapidly prototyping and few other case.
							<br />
							Most programmer thinks, MongoDB is the best in NoSQL. It is open
							source, documental database, It offers driver most of the popular
							programming language. It is genrally used BSON which is
							comparatively very fast.
						</p>
					</article>
					<article className='my-3'>
						<h3 className='text-secondary'>
							Q: Difference between SQL and NoSQL databases?
						</h3>
						<p className='lead'>
							SQL (Structured Query Language) databases are relational that's
							why are primarily called as Relational Database (RDBMS). SQL
							databases use structured query language and prefered 'Table', SQL
							databases are vertically scalable, is a table based and it are
							better for multi row transiction.
						</p>
						<p className='lead'>
							NoSQL (Non Structured Query Language) databases are non-relational
							that's why are primarily called as as non-relational or
							distributed database. NoSQL databases have dynamic schemas for
							unstructured data and they worked very well without any stucture
							like table or schema. NoSQL databases are horizontally scalable,
							are documents which are actually key-value pair,
						</p>
					</article>
					<article className='my-3'>
						<h3 className='text-secondary'>
							Q: What's the purpose of JWT and how does it work?
						</h3>
						<p className='lead'>
							JWT is a open standard way to share information client and server
							securely. It's encoded by JSON. It is usually used for
							authentication purpose
						</p>
						<p className='lead'>
							When a user create or login server, jwt create a token with secret
							code and send it browser. It generally stored in cookie or
							localStorage. When user try to access any private route or access
							to authenticated data, browser send the request to server with jwt
							token, then server verify the token, after verification jwt
							returns the returns the result. If verification is successfull,
							user can access the demanding data or if verification is failed
							then user generally goes to login / registration page.
						</p>
					</article>
				</div>
			</div>
		</div>
	);
};

export default Blog;
