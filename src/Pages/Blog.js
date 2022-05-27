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
						<p></p>
					

					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="2">
					<Accordion.Header> Difference between SQL and NoSQL databases?</Accordion.Header>
					<Accordion.Body>
						<p> </p>
						

					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</div>
	);


};

export default Blog;
