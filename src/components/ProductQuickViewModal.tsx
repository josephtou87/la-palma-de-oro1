'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Image from 'next/image'
import { Product } from '@/lib/data' // Asegúrate de que Product esté exportado de data.ts
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useCart } from '@/context/CartContext'

interface ProductQuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export default function ProductQuickViewModal({ isOpen, onClose, product }: ProductQuickViewModalProps) {
  const { addItem } = useCart();

  if (!product) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-6 text-left align-middle shadow-xl transition-all relative">
                <button
                  type="button"
                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  onClick={onClose}
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative h-80 w-full rounded-lg overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <Dialog.Title as="h3" className="text-2xl font-bold leading-6 text-amber-950 dark:text-amber-50 mb-2">
                        {product.name}
                      </Dialog.Title>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        {product.description}
                      </p>
                      <p className="text-gray-500 dark:text-gray-300 text-xs mb-4">
                        Categoría: {product.category}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-3xl font-bold text-yellow-700">${product.price.toFixed(2)}</span>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-yellow-600 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 transition-colors"
                        onClick={() => {
                          addItem(product, 1);
                          onClose(); // Cierra el modal después de añadir al carrito
                        }}
                      >
                        Agregar al Carrito
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}