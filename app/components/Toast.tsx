'use client'

import { toast } from 'react-hot-toast'
import { Check, X, AlertTriangle, Info } from 'lucide-react'

type ToastType = 'success' | 'error' | 'warning' | 'info'

interface ToastOptions {
  message: string
  type?: ToastType
  duration?: number
}

const icons = {
  success: <Check className="w-5 h-5 text-green-500" />,
  error: <X className="w-5 h-5 text-red-500" />,
  warning: <AlertTriangle className="w-5 h-5 text-yellow-500" />,
  info: <Info className="w-5 h-5 text-blue-500" />,
}

export const showToast = ({ message, type = 'info', duration = 3000 }: ToastOptions) => {
  toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">{icons[type]}</div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {message}
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200 dark:border-gray-700">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Close
          </button>
        </div>
      </div>
    ),
    { duration }
  )
}
