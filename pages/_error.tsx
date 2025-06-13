import { NextPageContext } from 'next'
import Head from 'next/head'

interface ErrorProps {
  statusCode?: number
  hasGetInitialPropsRun?: boolean
  err?: Error
}

function Error({ statusCode, hasGetInitialPropsRun, err }: ErrorProps) {
  return (
    <>
      <Head>
        <title>{statusCode ? `${statusCode} - Server Error` : 'Client Error'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
          <div className="mb-6">
            <h1 className="text-6xl font-bold text-gray-900 mb-2">
              {statusCode || '???'}
            </h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              {statusCode
                ? statusCode === 404
                  ? 'Page Not Found'
                  : 'Server Error'
                : 'Client Error'}
            </h2>
            <p className="text-gray-600 mb-6">
              {statusCode === 404
                ? "Sorry, the page you're looking for doesn't exist."
                : statusCode
                ? 'A server-side error occurred.'
                : 'A client-side error occurred.'}
            </p>
          </div>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    </>
  )
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error