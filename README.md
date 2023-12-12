# Proxy Server for Public APIs

This project sets up a Node.js proxy server using Express and http-proxy-middleware to address CORS issues when making requests to public APIs from the frontend.

## Features 

- Proxies HTTP requests to any public APIs.
- Adds CORS headers to allow frontend access to the API.
- Configurable through environment variables.

## Getting Started

### Prerequisites

- Node.js
- npm (normally comes with Node.js)

### Installation

Clone the repository and install its dependencies.

```bash
git clone https://github.com/yourusername/proxy-server.git
cd proxy-server
npm install
```

### Configuration

Create a `.env` file in the root directory of the project and add the following:
PORT=3000
API_URL=https://api.publicapis.org


### Running the Server

Start the server with:
npm start


The server will be running on `http://localhost:3000/api`.

## Usage

After starting the server, configure your frontend application to send requests to the proxy server endpoint.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you have any questions or feedback, please email me at [your-email@example.com](mailto:your-email@example.com).

## License

This project is open-source and available under the MIT License. See the LICENSE file for more details.