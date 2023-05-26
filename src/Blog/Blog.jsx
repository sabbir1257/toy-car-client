import React from "react";

const Blog = () => {
  return (
    <div className="md:w-[1250px] mx-auto">
      <h1 className="text-center font-bold text-3xl text-blue-600 underline">Blog</h1>
      <div className="grid md:grid-cols-2 gap-8 my-14 ">
        <div className="border-solid border-2 border-blue-600 p-6 rounded-lg">
          <h2 className="text-3xl font-bold underline">
           1. What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h2>
          <br />
          <p className="text-justify">
            Access Token: A short-lived credential granting access to specific
            resources. It contains user information and permissions, used for
            authentication and authorization in each server request. Refresh
            Token: A long-lived credential issued alongside an access token. It
            allows obtaining a new access token without re-authentication when
            the current one expires. Store access tokens securely on the
            client-side, typically in memory, secure storage mechanisms like
            local/session storage or an HTTP-only cookie. Refresh tokens require
            even more secure storage, preferably in an HTTP-only cookie or
            encrypted storage, due to their longer lifespan and higher
            sensitivity. Consider additional security measures to protect
            against token compromises. Consult documentation and follow best
            practices of the authentication framework or library used.
          </p>
        </div>

        <div className="border-solid border-2 border-blue-600 p-6 rounded-lg">
          <h2 className="text-3xl font-bold underline">Compare SQL and NoSQL databases?</h2>
          <br />
          <p className="text-justify">
            SQL databases are relational and use a structured schema with tables
            and predefined relationships. They are vertically scalable and
            provide ACID compliance, making them suitable for complex,
            structured data. NoSQL databases are non-relational, offering
            flexibility in data modeling with dynamic schemas. They are
            horizontally scalable, handling large volumes of unstructured or
            semi-structured data. NoSQL databases often prioritize high
            scalability and eventual consistency over ACID properties. The
            choice between SQL and NoSQL depends on the data's structure,
            scalability needs, and the specific use case, with SQL databases
            favored for structured data and NoSQL databases for handling
            unstructured or rapidly changing data.
          </p>
        </div>

        <div className="border-solid border-2 border-blue-600 p-6 rounded-lg">
          <h1 className="text-3xl font-bold underline">What is express js? What is Nest JS?</h1>
          <br />
          <p className="text-justify">
            Express.js is a popular web application framework for Node.js. It
            simplifies the process of building web applications and APIs by
            providing a minimalistic and flexible set of features. With
            Express.js, developers can easily handle HTTP requests, define
            routes, implement middleware, and manage server-side logic. It is
            known for its simplicity and extensibility, allowing developers to
            customize their applications according to their specific needs.
            NestJS is a progressive, TypeScript-based framework for building
            scalable and maintainable server-side applications. It is built on
            top of Express.js and adds an additional layer of structure and
            features inspired by Angular. NestJS follows the modular design
            pattern, promotes the use of decorators and dependency injection,
            and provides features like dependency injection, middleware support,
            routing, and more. It focuses on developer productivity and
            maintainability while leveraging the power of TypeScript and the
            Node.js ecosystem.
          </p>
        </div>

        <div className="border-solid border-2 border-blue-600 p-6 rounded-lg">
          <h2 className="text-3xl font-bold underline">What is MongoDB aggregate and how does it work ?</h2>
          <br />
          <p className="text-justify">
            MongoDB's aggregate is a powerful framework for performing advanced
            data aggregation operations on collections of documents. It allows
            you to process and transform data, perform calculations, and
            retrieve aggregated results. The aggregate pipeline consists of
            multiple stages that can be chained together to create complex data
            processing workflows. Each stage performs a specific operation on
            the input documents, such as filtering, grouping, sorting,
            projecting, or performing mathematical operations. The output of one
            stage becomes the input for the next stage. This allows you to
            create sophisticated queries and perform complex data manipulations
            in a single operation, making it efficient and flexible for
            analytical and reporting tasks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
