import React from 'react';
import styles from './Abschluss.module.css'
import { TrashIcon } from '@heroicons/react/solid'

let auftraege = [
    {id: 65987, caseManager: "Bojan Calic", patient: 12154, producer: "Hanne Jost", phase: "Kalkulation", status: "Ausblendbar"},
    {id: 65987, caseManager: "Bojan Calic", patient: 12154, producer: "Maria Lenz", phase: "Kalkulation", status: "Ausblendbar"},

    // More items...
]

export default function Abschluss() {
    return (
        <ul role="list" className="space-y-2 block justify-center">
            {auftraege.map((auftrag) => (
                <div className={styles.case}>
                    <li key={auftrag.id}
                        className="bg-white shadow-md overflow-hidden px-1 py-3 sm:px-4 sm:rounded-md text-xs">
                        {/* Content */}
                        <div className={styles.fntSize}>
                            <div className="flex justify-between">
                                <div>
                                    <div>Auftrag</div>
                                    <div>CM</div>
                                    <div>Patient</div>
                                    {(auftrag.producer != "") ?
                                        <div>Producer</div> : ""
                                    }

                                </div>
                                <div>
                                    <div className="pl-4">{auftrag.id}</div>
                                    <div className="pl-4">{auftrag.caseManager}</div>
                                    <div className="pl-4">{auftrag.patient}</div>
                                    {(auftrag.producer != "") ?
                                        <div className="pl-4">{auftrag.producer}</div> : ""
                                    }
                                </div>
                                <div className="inline-flex">
                                    {(auftrag.status == "Bearbeitbar") ? <span
                                        className='w-3 h-3 rounded-full bg-green-700'
                                        aria-hidden="true"
                                    /> : ""}
                                </div>
                                <div className="inline-flex">
                                    {(auftrag.status == "In Bearbeitung") ? <span
                                        className='w-3 h-3 rounded-full bg-orange-500'
                                        aria-hidden="true"
                                    /> : ""}
                                </div>
                                <div className="inline-flex">
                                    {(auftrag.status == "Freigeben") ? <span
                                        className='w-3 h-3 rounded-full bg-yellow-500'
                                        aria-hidden="true"
                                    /> : ""}
                                </div>
                                <div className="inline-flex">
                                    {(auftrag.status == "NC") ? <span
                                        className='w-3 h-3 rounded-full bg-red-700'
                                        aria-hidden="true"
                                    /> : ""}
                                </div>
                                <div className="inline-flex">
                                    {(auftrag.status == "Ausblendbar") ? <TrashIcon className="flex-shrink-0 h-3 w-3 text-black" aria-hidden="true" /> : ""}
                                </div>
                            </div>
                        </div>
                    </li>
                </div>
            ))}
        </ul>
    )
}