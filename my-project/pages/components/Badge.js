import styles from "./Badge.module.css"

/* This example requires Tailwind CSS v2.0+ */
export default function Badge( { Titel, Handler } ) {
    return (
        <>
      <div className={styles.badgeProportion}>
        <span className="inline-flex rounded-full items-center px-0.5 py-1 pl-2.5 pr-1 font-medium bg-indigo-600 text-white justify-center">
          {Titel}
          <button
              type="button" onClick={Handler}
              className="flex-shrink-0 ml-1 h-2 w-2 mr-1 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
          >
            <span className="sr-only">Remove large option</span>
            <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
              <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7"/>
            </svg>
          </button>
        </span>
      </div>
        </>
    )
}
