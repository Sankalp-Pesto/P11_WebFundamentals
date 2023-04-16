# Assignment -01



### 1.What is a protocol stack, and how is it used in web development?
##### Ans. Protocol stacks are a layered collection of protocols that work together to provide communication in between the server and the client. The stack contains different protocol layers, each layer performs a different task and is responsible for well-defined task. It contains 4 layers namely Link Layer, Network Layer, Transport Layer and Application Layer. Protocol stacks are used in a layered hierarchy architecture in web development.

1. First Layer-Link Layer - This layer combines the Physical and Data layers and routes the data between devices on the same network. It also manages the exchange of data between the network and other devices.

2. Second Layer-Network Layer- This layer corresponds to the Network layer. The Internet Protocol (IP) uses the IP address, consisting of a Network Identifier and a Host Identifier, to determine the address of the device it is communicating with.

3. Third Layer-Transport Layer - This is the part of the protocol stack where the Transport Control Protocol (TCP) can be found. TCP works by asking another device on the network if it is willing to accept information from the local device.
4. Fourth Layer-Application Layer- Layer 4 combines the Session, Presentation and Application layers of the OSI model. Protocols for specific functions such as e-mail (Simple Mail Transfer Protocol, SMTP) and file transfer (File Transfer Protocol, FTP) reside at this level.

### 2.What are the different types of web servers, and how do they differ in terms of functionality and performance?
#### Ans. There are mainly four types of web servers depending on content that need to be hosted, the level of performance and scalability required.
1. Apache: Apache is the most popular and widely used web server in the world. It is an open-source software that is developed and maintained by the Apache Foundation. Apache is known for its reliability, flexibility, and performance, making it a popular choice for hosting websites of all sizes. It is also highly customizable, with a wide range of modules and plugins available to extend its functionality. Apache is highly configurable and can be fine-tuned to meet the specific needs of a website or web application. It is also known for its reliability and performance, making it a popular choice for many large and high-traffic websites.

2. Nginx: Nginx is another popular open-source web server that is known for its high performance and low resource usage. It is often used as a reverse proxy server, routing traffic to other servers and services, and can also be used to cache static content for faster delivery to users. Nginx is widely used to host high traffic websites and is often used in combination with Apache to balance the load between the two servers. One of the key features of Nginx is its ability to handle many concurrent connections efficiently. It uses an event-driven architecture and can handle requests asynchronously, which makes it well-suited for handling high traffic volumes.

3. Microsoft IIS: Microsoft IIS (Internet Information Services) is a proprietary web server developed by Microsoft for use with the Windows operating system. It is a powerful and feature-rich web server, with support for a wide range of web technologies and protocols. IIS is often used in enterprise environments and is integrated with other Microsoft products such as Active Directory and Exchange. IIS is a flexible and extensible web server that can be used to host a wide range of content, including static web pages, dynamic web pages, and web-based applications. It supports a variety of programming languages, including ASP.NET, PHP, and Python, and can be configured with a variety of modules and extensions to add new features and functionality.

4. Lighttpd: Lighttpd is a free and open-source web server designed to be lightweight, fast, and efficient. It is written in C and has a low memory footprint, making it a good choice for hosting high-traffic websites on low-resource servers. One of the key features of Lighttpd is its modular design, which allows users to easily customize and extend the server's functionality. It supports a wide range of features including FastCGI, URL rewriting, and server-side scripting languages like PHP and Ruby. It also has built-in support for SSL/TLS and can be configured to work with external authentication modules.

5. Jigsaw: Jigsaw is a web server that was developed by the World Wide Web Consortium (W3C) as a reference implementation of the HTTP/1.1 protocol. Jigsaw remains a popular choice for developers who are interested in learning about web server technology and HTTP protocols. One of the key features of Jigsaw is its modular design, which allows users to easily customize and extend the server's functionality. It supports a wide range of features including CGI, server-side scripting languages like PHP and Python, and SSL/TLS encryption. It also has built-in support for virtual hosting, which allows a single server to host multiple websites.


### 3.What is web hosting, and what are the different types of hosting services available for websites?
#### Ans. Web hosting is an online service that makes a website’s content accessible on the internet. It is a service that provides storage for the files that make ups a website and the software, physical hardware, and network infrastructure that makes the website available to others on the internet. There are different types of web hosting services available for websites such as: -
1. Shared Hosting: A shared hosting service is a web hosting service where many websites reside on one web server connected to the Internet. The overall cost of server maintenance is spread over many customers. By using shared hosting, the website will share a physical server with one or more other websites.
2. Cloud Hosting: Cloud hosting is a type of web hosting service which uses a group of servers (which are often spread out all around the world) to host lots of websites. Like other types of cloud computing, cloud hosting uses the processing power, memory, and storage of multiple servers to ensure that a website is always available.
3. Managed Hosting:  In this type of web hosting service, the hosting company takes care of all the server optimizations and software upgrades, making sure that website remains fast and secure. This way, website owner only needs to focus on managing website content or products.
4. VPS Hosting: A virtual private server hosting acts as an isolated, virtual environment on a physical server, which is owned and operated by a cloud or web hosting provider. VPS hosting uses virtualization technology to split a single physical machine into multiple private server environments that share the resources.
5. Dedicated Hosting: Dedicated hosting is a type of web hosting service in which a physical server (or servers) is dedicated to a single business customer. The customer has complete control over the machine, so they can optimize it for their unique requirements, including performance and security.


### 4.What is scaling, and why is it important for web applications? How does scaling differ for vertical and horizontal scaling?
#### Ans. Scaling is a way to handle additional workloads by adjusting server infrastructure. The increased workload could be anything from an influx of users to a large volume of simultaneous transactions or anything else that pushes the software beyond its designed capacity. It can be done in two ways, horizontal scaling and vertical scaling , depending upon the type of usage. It is highly important for web applications as scaling helps in better user experience, offers high stability to the web applications, provides better application performances and save money in the long run.
| Horizontal Scaling        | Vertical Scaling          
| ------------- |:-------------:
| When new server racks are added to the existing system to meet the higher expectation, it is known as horizontal scaling.      | When new server racks are added to the existing system to meet the higher expectation, it is known as horizontal scaling.
| It expands the size of the existing system horizontally. | It expands the size of the existing system vertically.
| It is easier to upgrade. | It is harder to upgrade and may involve downtime.
| High resilience and fault tolerance | Single point of failure
| It is difficult to implement | It is easy to implement
| It is costlier, as new server racks comprise a lot of resources. | It is cheaper as we need to just add new resources.

### 5.What is SEO (Search Engine Optimization), and how can web developers optimize their websites for better search engine rankings?
#### Ans. SEO is a set of processes aimed at improving a website’s visibility in search engines such as google, yahoo etc. It is simply a practice of orienting a website to rank higher on a search engine results so that more users get directed to the respective website.
#### Web develops can easily optimise their websites for better search engine rankings in following ways: -
1. Optimize your existing content
2. Track metrics with Google Analytics
3. Make sure site is mobile-friendly
4. Optimise META Tags
5. Decrease load times
6. Do keyword research
7. Improve your website design
8. Use internal linking
9. Get backlinks