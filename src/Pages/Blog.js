import { Accordion, Table } from "react-bootstrap";

const Blog = () => {
	return (

		<div className='px-5 mt-5 fw-bold'>


			<h1 className='p-5 justify-content-center text-center'> Question Part</h1>

			<Accordion defaultActiveKey={['0']} alwaysOpen>
				<Accordion.Item eventKey="0">
					<Accordion.Header>Difference between JS and Node.js?</Accordion.Header>
					<Accordion.Body className='mt-3'>
						<Table striped bordered hover>
							<thead>
								<tr>

									<th> JavaScript</th>
									<th>Node Js</th>

								</tr>
							</thead>
							<tbody>
								<tr>

									<td>Javascript is a programming language that is used for writing scripts on the website.</td>
									<td>NodeJS is a Javascript runtime environment.</td>

								</tr>
								<tr>

									<td>Javascript can only be run in the browsers.</td>
									<td>We can run Javascript outside the browser with the help of NodeJS.</td>

								</tr>
								<tr>

									<td>It is basically used on the client-side.</td>
									<td>It is mostly used on the server-side.</td>

								</tr>
								<tr>

									<td>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.
									</td>
									<td>V8 is the Javascript engine inside of node.js that parses and runs Javascript.</td>

								</tr>
								<tr>

									<td>It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.</td>
									<td>Nodejs is written in C, C++ and Javascript.</td>

								</tr>
								<tr>

									<td>Some of the javascript frameworks are RamdaJS, TypedJS, etc. </td>
									<td>Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.</td>

								</tr>

							</tbody>
						</Table>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="1">
					<Accordion.Header>  When should we use Node.js and MongoDB?</Accordion.Header>
					<Accordion.Body>
						<ul>
							<li> We should use Nodejs</li>
							<p>Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc...

								So, if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it.</p>
							<li>We should use MongoDB</li>
							<p>If your application requires the ability to save data so that it can be effectively queried or updated later, you'll almost certainly need to utilize a database. There are a slew of well-known databases. One such database is MongoDB. Other databases include MariaDB, MySql, CouchDB, DynamoDB (on AWS), and Postgres. Distinct databases have different strengths (things they excel at) and new methods of being used, thus choosing the right/best database for what you're doing is a whole different topic.</p>
						</ul>


					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="2">
					<Accordion.Header>  What's the purpose of JWT and how does it work??</Accordion.Header>
					<Accordion.Body>
						<p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p><br></br>
						<p>JWTs are unique among web tokens in that they include a set of claims. Claims are a way for two parties to exchange information. The nature of these assertions is determined by the use case at hand. A claim could state who issued the token, how long it's valid, or what rights the client has been given.

							A JWT is a three-part string separated by dots (.) that is serialized using base64.</p>


					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="3">
					<Accordion.Header> Difference between SQL and NoSQL databases?</Accordion.Header>
					<Accordion.Body>
						<p>The critical differences between SQL vs NoSQL are: </p>
						<ul>
							<li>Relational databases are SQL, while non-relational databases are NoSQL.</li>
							<li>SQL databases have a specified schema and employ structured query language.</li>
							<li>For unstructured data, NoSQL databases use dynamic schemas.</li>
							<li>SQL databases scale vertically, but NoSQL databases scale horizontally.</li>
							<li>NoSQL databases are document, key-value, graph, or wide-column stores, whereas SQL databases are table-based.</li>
							<li>SQL databases excel in multi-row transactions, while NoSQL excels at unstructured data such as documents and JSON.</li>
						</ul>


					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

		</div>
	);


};

export default Blog;
