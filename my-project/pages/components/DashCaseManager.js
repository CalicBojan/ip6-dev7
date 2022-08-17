import React from "react";
import {Fragment, useState} from 'react'
import {Dialog, Menu, Transition} from '@headlessui/react'
import {
    BellIcon,
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    CogIcon,
    MenuAlt2Icon,
    UsersIcon,
    XIcon,
    CubeIcon,
    PrinterIcon,
    LogoutIcon,
} from '@heroicons/react/outline'
import {PlusIcon, SearchIcon, TrashIcon} from '@heroicons/react/solid'
import LogoutAlert from "./LogoutAlert";
import Logout from "./LogoutAlert";
import Abschluss from "./Abschluss";
import styles from './DashCaseManager.module.css'
import {CheckIcon, SelectorIcon} from '@heroicons/react/solid'
import {Combobox} from '@headlessui/react'
import Kalkulation from "./Kalkulation";
import styles3 from './AuftragsListe.module.css'
import Produktion from "./Produktion";
import styles2 from './Auftrag.module.css'
import data from "./MOCK_DATA.json";
import Badge from "./Badge";
import Home from "../index";
import { Listbox } from '@headlessui/react'


const navigation = [
    {name: 'Dashboard', href: '#', icon: HomeIcon, current: true},
    {name: 'Prozesse', href: '#', icon: ChartBarIcon, current: false},
    {name: 'Produkte', href: '#', icon: CubeIcon, current: false},
    {name: 'Equipment', href: '#', icon: PrinterIcon, current: false},
    {name: 'Kunden', href: '#', icon: UsersIcon, current: false},
    {name: 'Einstellungen', href: '#', icon: CogIcon, current: false},
]
const userNavigation = [
    {name: 'Einstellungen', href: '#', icon: CogIcon, current: false},
    {name: 'Abmelden', href: '#', icon: LogoutIcon, current: false},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DashCaseManager({Logout}) {

    {/* Filtered List für Auftrag Phase */}
    const auftraegeFiltered = data.filter(d => d.phase == "Auftrag");
    {/* Filtered List für Kalkulationsphase */}
    const kalkulationFiltered = data.filter(d => d.phase == "Kalkulation");
    {/* Filtered List für Bestätigungsphase */}
    const bestaetigungFiltered = data.filter(d => d.phase == "Bestätigung");
    {/* Filtered List für Bestätigungsphase */}
    const produktionFiltered = data.filter(d => d.phase == "Produktion");
    {/* Filtered List für Bestätigungsphase */}
    const abschlussFiltered = data.filter(d => d.phase == "Abschluss");


    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const [filters, setFilters] = useState({
        customer: "",
        patient: "",
        case: "",
        date: "",
        phase: "",
        status: "",
    });

    const phasesForDropdown = () =>{
        console.log(...new Set(data.map((item) => item.phase)))
        return [...new Set(data.map((item) => item.phase))]
    };

    const statusesForDropdown = () =>{
        console.log(...new Set(data.map((item) => item.status)))
        return [...new Set(data.map((item) => item.status))]
    };


    const handleInput = (field) => (event) => {
        console.log("handleCustomerChange activated")
        const { value } = event.target;
        setFilters({
            ...filters,
            [field]: value,
        });
        switch(field){
            case "phase":
                console.log(value);
                handleFilterPhase(value);
                break;
            case "status":
                console.log(value);
                handleFilterStatus(value);
                break;
            case "date":
                console.log(value);
                handleFilterDate(value);
                break;
            case "customer":
                console.log(value);
                handleFilterCustomer(value);
                break;
            case "patient":
                console.log(value);
                handleFilterPatient(value);
                break;
            case "case":
                console.log(value);
                handleFilterCase(value);
                break;
            default:
                break;
        }
    };

    const [allData, setData] =useState(auftraegeFiltered);
    const [allDataKalkulation, setDataKalkulation] =useState(kalkulationFiltered);
    const [allDataBestaetigung, setDataBestaetigung] =useState(bestaetigungFiltered);
    const [allDataProduktion, setDataProduktion] =useState(produktionFiltered);
    const [allDataAbschluss, setDataAbschluss] =useState(abschlussFiltered);

    const handleFilterCustomer = (customer) => {
        const filteredData = auftraegeFiltered.filter(item => {
            const fullCostumer = `${item.customer}`;
            console.log("customer handler activated");
            console.log(fullCostumer);
            if(fullCostumer.toLowerCase().includes(customer.toLowerCase())){
                return item;
            }
        });
        const filteredKalkulationData = kalkulationFiltered.filter(item => {
            const fullCostumer = `${item.customer}`;
            console.log("customer handler activated");
            console.log(fullCostumer);
            if(fullCostumer.toLowerCase().includes(customer.toLowerCase())){
                return item;
            }
        });
        const filteredBestaetigungData = bestaetigungFiltered.filter(item => {
            const fullCostumer = `${item.customer}`;
            console.log("customer handler activated");
            console.log(fullCostumer);
            if(fullCostumer.toLowerCase().includes(customer.toLowerCase())){
                return item;
            }
        });
        const filteredProduktionData = produktionFiltered.filter(item => {
            const fullCostumer = `${item.customer}`;
            console.log("customer handler activated");
            console.log(fullCostumer);
            if(fullCostumer.toLowerCase().includes(customer.toLowerCase())){
                return item;
            }
        });
        const filteredAbschlussData = abschlussFiltered.filter(item => {
            const fullCostumer = `${item.customer}`;
            console.log("customer handler activated");
            console.log(fullCostumer);
            if(fullCostumer.toLowerCase().includes(customer.toLowerCase())){
                return item;
            }
        });
        setData(filteredData);
        setDataKalkulation(filteredKalkulationData);
        setDataBestaetigung(filteredBestaetigungData);
        setDataProduktion(filteredProduktionData);
        setDataAbschluss(filteredAbschlussData);
    }

    const handleFilterPatient = (patient) => {
        const filteredData = auftraegeFiltered.filter(item => {
            const fullPatient = `${item.patient}`;
            console.log(fullPatient);
            if(fullPatient.toLowerCase().includes(patient.toLowerCase())){
                return item;
            }
        });
        const filteredKalkulationData = kalkulationFiltered.filter(item => {
            const fullPatient = `${item.patient}`;
            console.log(fullPatient);
            if(fullPatient.toLowerCase().includes(patient.toLowerCase())){
                return item;
            }
        });
        const filteredBestaetigungData = bestaetigungFiltered.filter(item => {
            const fullPatient = `${item.patient}`;
            console.log(fullPatient);
            if(fullPatient.toLowerCase().includes(patient.toLowerCase())){
                return item;
            }
        });
        const filteredProduktionData = produktionFiltered.filter(item => {
            const fullPatient = `${item.patient}`;
            console.log(fullPatient);
            if(fullPatient.toLowerCase().includes(patient.toLowerCase())){
                return item;
            }
        });
        const filteredAbschlussData = abschlussFiltered.filter(item => {
            const fullPatient = `${item.patient}`;
            console.log(fullPatient);
            if(fullPatient.toLowerCase().includes(patient.toLowerCase())){
                return item;
            }
        });
        setData(filteredData);
        setDataKalkulation(filteredKalkulationData);
        setDataBestaetigung(filteredBestaetigungData);
        setDataProduktion(filteredProduktionData);
        setDataAbschluss(filteredAbschlussData);
    }

    const handleFilterCase = (patient) => {
        const filteredData = auftraegeFiltered.filter(item => {
            const fullCase = `${item.caseNr}`;
            console.log(fullCase);
            if(fullCase.toLowerCase().includes(patient.toLowerCase())){
                return item;
            }
        });
        const filteredKalkulationData = kalkulationFiltered.filter(item => {
            const fullCase = `${item.caseNr}`;
            console.log(fullCase);
            if(fullCase.toLowerCase().includes(patient.toLowerCase())){
                return item;
            }
        });
        const filteredBestaetigungData = bestaetigungFiltered.filter(item => {
            const fullCase = `${item.caseNr}`;
            console.log(fullCase);
            if(fullCase.toLowerCase().includes(patient.toLowerCase())){
                return item;
            }
        });
        const filteredProduktionData = produktionFiltered.filter(item => {
            const fullCase = `${item.caseNr}`;
            console.log(fullCase);
            if(fullCase.toLowerCase().includes(patient.toLowerCase())){
                return item;
            }
        });
        const filteredAbschlussData = abschlussFiltered.filter(item => {
            const fullCase = `${item.caseNr}`;
            console.log(fullCase);
            if(fullCase.toLowerCase().includes(patient.toLowerCase())){
                return item;
            }
        });
        setData(filteredData);
        setDataKalkulation(filteredKalkulationData);
        setDataBestaetigung(filteredBestaetigungData);
        setDataProduktion(filteredProduktionData);
        setDataAbschluss(filteredAbschlussData);
    }

    const handleFilterDate = (date) => {
        const filteredData = auftraegeFiltered.filter(item => {
            const fullDate = `${item.datum}`;
            console.log(fullDate);
            if(fullDate.includes(date)){
                return item;
            }
        });
        const filteredKalkulationData = kalkulationFiltered.filter(item => {
            const fullDate = `${item.datum}`;
            console.log(fullDate);
            if(fullDate.includes(date)){
                return item;
            }
        });
        const filteredBestaetigungData = bestaetigungFiltered.filter(item => {
            const fullDate = `${item.datum}`;
            console.log(fullDate);
            if(fullDate.includes(date)){
                return item;
            }
        });
        const filteredProduktionData = produktionFiltered.filter(item => {
            const fullDate = `${item.datum}`;
            console.log(fullDate);
            if(fullDate.includes(date)){
                return item;
            }
        });
        const filteredAbschlussData = abschlussFiltered.filter(item => {
            const fullDate = `${item.datum}`;
            console.log(fullDate);
            if(fullDate.includes(date)){
                return item;
            }
        });
        setData(filteredData);
        setDataKalkulation(filteredKalkulationData);
        setDataBestaetigung(filteredBestaetigungData);
        setDataProduktion(filteredProduktionData);
        setDataAbschluss(filteredAbschlussData);
    }

    const handleFilterPhase = (phase) => {
        const filteredData = auftraegeFiltered.filter(item => {
            const fullPhase = `${item.phase}`;
            console.log(fullPhase);
            if(fullPhase.toLowerCase().includes(phase.toLowerCase())){
                return item;
            }
        });
        const filteredKalkulationData = kalkulationFiltered.filter(item => {
            const fullPhase = `${item.phase}`;
            console.log(fullPhase);
            if(fullPhase.toLowerCase().includes(phase.toLowerCase())){
                return item;
            }
        });

        const filteredBestaetigungData = bestaetigungFiltered.filter(item => {
            const fullPhase = `${item.phase}`;
            console.log(fullPhase);
            if(fullPhase.toLowerCase().includes(phase.toLowerCase())){
                return item;
            }
        });
        const filteredProduktionData = produktionFiltered.filter(item => {
            const fullPhase = `${item.phase}`;
            console.log(fullPhase);
            if(fullPhase.toLowerCase().includes(phase.toLowerCase())){
                return item;
            }
        });

        const filteredAbschlussData = abschlussFiltered.filter(item => {
            const fullPhase = `${item.phase}`;
            console.log(fullPhase);
            if(fullPhase.toLowerCase().includes(phase.toLowerCase())){
                return item;
            }
        });

        setData(filteredData);
        setDataKalkulation(filteredKalkulationData);
        setDataBestaetigung(filteredBestaetigungData);
        setDataProduktion(filteredProduktionData);
        setDataAbschluss(filteredAbschlussData);
    }

    const handleFilterStatus = (status) => {
        const filteredData = auftraegeFiltered.filter(item => {
            const fullStatus = `${item.status}`;
            const select ="select"
            console.log(fullStatus);
            if(fullStatus == status){
                return item
            }if(select == status){
                return item
            }
        });
        const filteredKalkulationData = kalkulationFiltered.filter(item => {
            const fullStatus = `${item.status}`;
            const select ="select"
            console.log(fullStatus);
            if(fullStatus == status){
                return item
            }if(select == status){
                return item
            }
        });
        const filteredBestaetigungData = kalkulationFiltered.filter(item => {
            const fullStatus = `${item.status}`;
            const select ="select"
            console.log(fullStatus);
            if(fullStatus == status){
                return item
            }if(select == status){
                return item
            }
        });
        const filteredProduktionData = produktionFiltered.filter(item => {
            const fullStatus = `${item.status}`;
            const select ="select"
            console.log(fullStatus);
            if(fullStatus == status){
                return item
            }if(select == status){
                return item
            }
        });
        const filteredAbschlussData = abschlussFiltered.filter(item => {
            const fullStatus = `${item.status}`;
            const select ="select"
            console.log(fullStatus);
            if(fullStatus == status){
                return item
            }if(select == status){
                return item
            }
        });
        setData(filteredData)
        setDataKalkulation(filteredKalkulationData);
        setDataBestaetigung(filteredBestaetigungData);
        setDataProduktion(filteredProduktionData);
        setDataAbschluss(filteredAbschlussData);
    }

    const handleSetFilterBack = () =>{
        setData(auftraegeFiltered);
        setDataKalkulation(kalkulationFiltered);
        setDataBestaetigung(bestaetigungFiltered);
        setDataProduktion(produktionFiltered);
        setDataAbschluss(abschlussFiltered);
    };



    return (
        <>
            {/*

        ```
      */}
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-600 bg-opacity-75"/>
                        </Transition.Child>

                        <div className="fixed inset-0 flex z-40">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel
                                    className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-indigo-700">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                                            <button
                                                type="button"
                                                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                                onClick={() => setSidebarOpen(false)}
                                            >
                                                <span className="sr-only">Close sidebar</span>
                                                <XIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="flex-shrink-0 flex items-center px-4">
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
                                            alt="Workflow"
                                        />
                                    </div>
                                    <div className="mt-5 flex-1 h-0 overflow-y-auto">
                                        <nav className="px-2 space-y-1">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600',
                                                        'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                                                    )}
                                                >
                                                    <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300"
                                                               aria-hidden="true"/>
                                                    {item.name}
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                            <div className="flex-shrink-0 w-14" aria-hidden="true">
                                {/* Dummy element to force sidebar to shrink to fit close icon */}
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden md:flex md:w-52 md:flex-col md:fixed md:inset-y-0">

                    {/* Sidebar component */}
                    <div className="flex flex-col flex-grow pt-5 bg-indigo-700 overflow-y-auto">
                        <div className="flex items-center flex-shrink-0 px-4 text-white text-lg font-bold">
                            <h1>IP6 - Bachelor Arbeit</h1>
                        </div>
                        <div className="mt-5 flex-1 flex flex-col">
                            <nav className="flex-1 px-2 pb-4 space-y-1">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600',
                                            'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                        )}
                                    >
                                        <item.icon className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300"
                                                   aria-hidden="true"/>
                                        {item.name}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="md:pl-52 flex flex-col flex-1">
                    <div className="sticky top-0 z-10 flex-shrink-0 flex h-12 bg-white shadow">
                        <button
                            type="button"
                            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <MenuAlt2Icon className="h-6 w-6" aria-hidden="true"/>
                        </button>
                        <div className="flex-1 px-4 flex justify-between">
                            <div className="flex-1 flex">
                                <form className="w-full flex md:ml-0" action="#" method="GET">
                                    <label htmlFor="search-field" className="sr-only">
                                        Suchen
                                    </label>
                                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                        <div
                                            className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                            <SearchIcon className="h-5 w-5" aria-hidden="true"/>
                                        </div>
                                        <input
                                            id="search-field"
                                            className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                                            placeholder="Suchen"
                                            type="search"
                                            name="search"
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="ml-8 flex items-center md:ml-6 font-light mr-4">
                                <h1 className="mr-4">Case Manager</h1>

                                {/* Profile dropdown */}
                                <Menu as="div" className="ml-3 relative">
                                    <div>
                                        <Menu.Button
                                            className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            <span className="sr-only">Open user menu</span>
                                            <span
                                                className="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-100">
                                                <svg className="h-full w-full text-gray-300" fill="currentColor"
                                                     viewBox="0 0 24 24">
                                                  <path
                                                      d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
                                                </svg>
                                              </span>
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items
                                            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="block px-4 py-2 font-semibold">
                                                <h1>Bojan Calic</h1>
                                            </div>
                                            <div className="block px-4 pb-2 font-light text-xs">
                                                <h1>Case Manager</h1>
                                            </div>
                                            {userNavigation.map((item) => (
                                                <Menu.Item key={item.name}>
                                                    {({active}) => (
                                                        <a
                                                            href={item.href}
                                                            className={classNames(
                                                                active ? 'bg-gray-100' : '',
                                                                'block px-4 py-2 text-sm text-gray-700'
                                                            )}
                                                            onClick={(item.name == "Abmelden") ? () => {
                                                                setModalOpen(true);
                                                                console.log("Abmelden geklickt");
                                                            } : ""}
                                                        >
                                                            <div className="flex">
                                                                <item.icon
                                                                    className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300"
                                                                    aria-hidden="true"/>
                                                                {item.name}
                                                            </div>
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <main>
                        <div className="py-6">
                            {/* Title of Page */}
                            {/*
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                                <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                            </div>
                            */}

                            <div className="max-w-7xl px-1 sm:px-2 md:px-0">
                                {/* Content */}


                                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                                    {/*Button und Filter*/}
                                    <div className="flex justify-evenly">

                                        {/*Titel von Säule und Kalkulationsliste*/}
                                        <div className="block pl-1 pr-1">
                                            <h1 className="text-2xl font-semibold text-indigo-600 pb-2">Kalkulation</h1>
                                            <div className="bg-white shadow-lg px-1 py-4 sm:px-2 sm:rounded-md w-7/8 text-xs">
                                                <div className={styles3.columnTest}>
                                                    <ul role="list" className="space-y-2 block justify-center">
                                                        {allDataKalkulation.map((auftrag) => (
                                                            <div className={styles2.case}>
                                                                <li key={auftrag.id}
                                                                    className="bg-white shadow-md overflow-hidden px-1 py-3 sm:px-4 sm:rounded-md text-xs">
                                                                    {/* Content */}
                                                                    <div className={styles2.fntSize}>
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
                                                                                <div className="pl-4">{auftrag.caseNr}</div>
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
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </div>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/*Titel von Säule und Auftragsliste*/}
                                        <div className="block pl-1 pr-1">
                                            <h1 className="text-2xl font-semibold text-indigo-600 pb-2">Auftrag</h1>
                                            <div className="bg-white shadow-lg px-1 py-4 sm:px-2 sm:rounded-md w-7/8 text-xs">
                                                <div className={styles3.columnTest}>
                                                    <ul role="list" className="space-y-2 block justify-center">
                                                        {allData.map((auftrag) => (
                                                            <div className={styles2.case}>
                                                                <li key={auftrag.id}
                                                                    className="bg-white shadow-md overflow-hidden px-1 py-3 sm:px-4 sm:rounded-md text-xs">
                                                                    {/* Content */}
                                                                    <div className={styles2.fntSize}>
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
                                                                                <div className="pl-4">{auftrag.caseNr}</div>
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
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </div>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/*Titel von Säule und Bestätigung*/}
                                        <div className="block pl-1 pr-1">
                                            <h1 className="text-2xl font-semibold text-indigo-600 pb-2">Bestätigung</h1>
                                            <div className="bg-white shadow-lg px-1 py-4 sm:px-2 sm:rounded-md w-7/8 text-xs">
                                                <div className={styles3.columnTest}>
                                                    <ul role="list" className="space-y-2 block justify-center">
                                                        {allDataBestaetigung.map((auftrag) => (
                                                            <div className={styles2.case}>
                                                                <li key={auftrag.id}
                                                                    className="bg-white shadow-md overflow-hidden px-1 py-3 sm:px-4 sm:rounded-md text-xs">
                                                                    {/* Content */}
                                                                    <div className={styles2.fntSize}>
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
                                                                                <div className="pl-4">{auftrag.caseNr}</div>
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
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </div>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/*Titel von Säule und Produktion*/}
                                        <div className="block pl-1 pr-1">
                                            <h1 className="text-2xl font-semibold text-indigo-600 pb-2">Produktion</h1>
                                            <div className="bg-white shadow-lg px-1 py-4 sm:px-2 sm:rounded-md w-7/8 text-xs">
                                                <div className={styles3.columnTest}>
                                                    <ul role="list" className="space-y-2 block justify-center">
                                                        {allDataProduktion.map((auftrag) => (
                                                            <div className={styles2.case}>
                                                                <li key={auftrag.id}
                                                                    className="bg-white shadow-md overflow-hidden px-1 py-3 sm:px-4 sm:rounded-md text-xs">
                                                                    {/* Content */}
                                                                    <div className={styles2.fntSize}>
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
                                                                                <div className="pl-4">{auftrag.caseNr}</div>
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
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </div>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/*Titel von Säule und Abschluss*/}
                                        <div className="block pl-1 pr-1">
                                            <h1 className="text-2xl font-semibold text-indigo-600 pb-2">Abschluss</h1>
                                            <div className="bg-white shadow-lg px-1 py-4 sm:px-2 sm:rounded-md w-7/8 text-xs">
                                                <div className={styles3.columnTest}>
                                                    <ul role="list" className="space-y-2 block justify-center">
                                                        {allDataAbschluss.map((auftrag) => (
                                                            <div className={styles2.case}>
                                                                <li key={auftrag.id}
                                                                    className="bg-white shadow-md overflow-hidden px-1 py-3 sm:px-4 sm:rounded-md text-xs">
                                                                    {/* Content */}
                                                                    <div className={styles2.fntSize}>
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
                                                                                <div className="pl-4">{auftrag.caseNr}</div>
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
                                                </div>
                                            </div>
                                        </div>








                                        <div className="block pt-12">
                                            <div className="flex">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-2 py-2 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >
                                                    <PlusIcon className="h-5 w-5" aria-hidden="true"/>
                                                </button>
                                                <div className="ml-4 self-center text-xl font-semibold text-indigo-600">
                                                    Neuer Auftrag
                                                </div>
                                            </div>


                                            {/*Badge Bedingung*/}
                                            <div className={styles2.badge}>
                                                {(filters.case != "") ? (
                                                    <Badge Titel={"Auftrag"} />
                                                ):(
                                                    ""
                                                )}
                                                {(filters.date != "") ? (
                                                    <Badge Titel={"Datum"} />
                                                ):(
                                                    ""
                                                )}
                                                {(filters.phase != "") ? (
                                                    <Badge Titel={"Phase"} />
                                                ):(
                                                    ""
                                                )}
                                                {(filters.status == "Bearbeitbar") | (filters.status == "NC") | (filters.status == "Freigeben") | (filters.status == "In Bearbeitung") | (filters.status == "Ausblendbar")? (
                                                    <Badge Titel={"Status"} />
                                                ):(
                                                    ""
                                                )}
                                                {(filters.customer != "") ? (
                                                    <Badge Titel={"Kunde"} />
                                                ):(
                                                    ""
                                                )}
                                                {(filters.patient != "") ? (
                                                    <Badge Titel={"Patient"} />
                                                ):(
                                                    ""
                                                )}
                                            </div>
                                            <div className={styles2.filterSection}>
                                                    <div
                                                        className="bg-white shadow-lg px-1 py-2 sm:px-2 w-56 sm:rounded-md text-xs inline-block align-bottom">

                                                        {/*Datum Input*/}
                                                        <div className="pl-2 pr-2 pt-2">
                                                            <label htmlFor="date"
                                                                   className="block text-xs font-medium text-indigo-900">Datum</label>
                                                            <div className="mt-1 relative rounded-xl text-black pb-1">
                                                                <input type="date" name="date" id="date" onChange={handleInput("date")} value={filters.date}
                                                                       className="bg-white focus:border-indigo-500 block w-full px-4 sm:text-sm rounded-md border-2 border-indigo-900 outline-none"
                                                                       placeholder="Datum"/>
                                                            </div>
                                                        </div>

                                                        {/*Phase Input*/}
                                                        <div className="pl-2 pr-2 pt-2 pb-1">
                                                            <label htmlFor="phase" className="block text-xs font-medium text-indigo-900 pb-1">
                                                                Phase
                                                            </label>
                                                            <select
                                                                id="phase"
                                                                name="phase"
                                                                className="bg-white focus:border-indigo-500 block w-full px-4 sm:text-sm rounded-md border-2 border-indigo-900 outline-none"
                                                                onChange={handleInput("phase")}
                                                                placeholder="Phase"
                                                            >
                                                                <option value={filters.phase}></option>
                                                                {phasesForDropdown().map((phase) =>(
                                                                    <option value={phase} key={phase}>
                                                                        {phase}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>

                                                        {/*Status Input*/}
                                                        <div className="pl-2 pr-2 pt-2 pb-1">
                                                            <label htmlFor="phase" className="block text-xs font-medium text-indigo-900 pb-1">
                                                                Status
                                                            </label>
                                                            <select
                                                                id="phase"
                                                                name="phase"
                                                                className="bg-white focus:border-indigo-500 block w-full px-4 sm:text-sm rounded-md border-2 border-indigo-900 outline-none"
                                                                onChange={handleInput("status")}
                                                                placeholder="Phase"
                                                            >
                                                                <option value="select">Select</option>
                                                                {statusesForDropdown().map((status) =>(
                                                                    <option value={status} key={status}>
                                                                        {status}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>


                                                        {/*KundenID Input*/}
                                                        <div className="pl-2 pr-2 pt-2">
                                                            <label htmlFor="customer"
                                                                   className="block text-xs font-medium text-indigo-900">Kunden-ID</label>
                                                            <div className="mt-1 relative rounded-xl text-black pb-1">
                                                                <input type="text" name="customer" id="customer" onChange={handleInput("customer")} value={filters.customer}
                                                                       className="bg-white focus:border-indigo-500 block w-full px-4 sm:text-sm rounded-md border-2 border-indigo-900 outline-none"
                                                                       placeholder="Kunden-ID"/>
                                                            </div>
                                                        </div>

                                                        {/*PatientenID Input*/}
                                                        <div className="pl-2 pr-2 pt-2">
                                                            <label htmlFor="patient"
                                                                   className="block text-xs font-medium text-indigo-900">Patienten-ID</label>
                                                            <div className="mt-1 relative rounded-xl text-black pb-1">
                                                                <input type="text" name="patient" id="patient" onChange={handleInput("patient")} value={filters.patient}
                                                                       className="bg-white focus:border-indigo-500 block w-full px-4 sm:text-sm rounded-md border-2 border-indigo-900 outline-none"
                                                                       placeholder="Patienten-ID"/>
                                                            </div>
                                                        </div>

                                                        {/*Auftragsnummer Input*/}
                                                        <div className="pl-2 pr-2 pt-2">
                                                            <label htmlFor="patient"
                                                                   className="block text-xs font-medium text-indigo-900">Auftragsnummer</label>
                                                            <div className="mt-1 relative rounded-xl text-black pb-1">
                                                                <input type="text" name="case" id="case" onChange={handleInput("case")} value={filters.case}
                                                                       className="bg-white focus:border-indigo-500 block w-full px-4 sm:text-sm rounded-md border-2 border-indigo-900 outline-none"
                                                                       placeholder="Auftragsnummer"/>
                                                            </div>
                                                        </div>

                                                        <div className="flex">
                                                            {/*Checkbox*/}
                                                            <div className=" pl-2 pr-0.5 mb-2 flex mt-1 justify-between items-center text-center content-center">
                                                                <div className="flex place-items-center">
                                                                    <input id="freigeben" aria-describedby="candidates-description"
                                                                           name="freigeben" type="checkbox" onChange={handleInput("status")} value={"Freigeben"}
                                                                           className="focus:ring-indigo-500 h-3 w-3 text-indigo-600 border-gray-300 rounded hover:cursor-pointer" />
                                                                    <div className="ml-1 text-xs">
                                                                        <label htmlFor="freigeben" className="font-thin text-gray-700">Freigeben</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/*Checkbox*/}
                                                            <div className=" pl-2 pr-2 mb-2 mt-1 flex justify-between items-center text-center content-center">
                                                                <div className="flex place-items-center">
                                                                    <input id="freigeben" aria-describedby="candidates-description"
                                                                           name="freigeben" type="checkbox"
                                                                           className="focus:ring-indigo-500 h-3 w-3 text-indigo-600 border-gray-300 rounded hover:cursor-pointer" />
                                                                    <div className="ml-1 text-xs">
                                                                        <label htmlFor="freigeben" className="font-thin text-gray-700">Wartung/Kalibrierung</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/*Filter zurücksetzen Button*/}
                                                        <div className="pl-2 pr-2 mb-2">
                                                            <button type="submit" onClick={handleSetFilterBack}
                                                                    className="group w-full flex justify-center py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 hover:shadow-md focus: focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                                Zurücksetzen
                                                            </button>
                                                        </div>



                                                    </div>
                                                </div>
                                            </div>



                                    </div>
                                    {modalOpen && <LogoutAlert Logout={Logout} setOpenModal={setModalOpen}/>}
                                </div>
                                {/* /End Content */}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
