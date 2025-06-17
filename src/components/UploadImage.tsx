import React from 'react'
import axios from 'axios'
import { useContext, useState } from 'react'
import { ModalContext } from '../context/ModalContext'
import { showSuccessToast, showErrorToast } from '../utils/toast'


const UploadImage = (): JSX.Element | null => {
    const modal = useContext(ModalContext)
    if (!modal) return null

    const { closeModal } = modal

    const [image, setImage] = useState<File | null>(null)
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)

    const [previewUrl, setPreviewUrl] = useState<string | null>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const file = e.target.files?.[0]
        if(file){
            setImage(file)
            setPreviewUrl(URL.createObjectURL(file))
        }
    }

    const handleSubmit = async () =>{
        if(!image || !description){
            console.warn('Image and description is missing')
            return
        }

        const formData = new FormData()
        formData.append('image', image)
        formData.append('description', description)

        const token = localStorage.getItem('token')

        try{
            setLoading(true);
            const response = await axios.post('https://instasight-api.onrender.com/api/v1/images', formData,{
                headers:{
                    Authorization: `Bearer ${token}` // ✅ CORREGIDO: Agregados backticks
                }
            })
            closeModal()
            setPreviewUrl(null)
            showSuccessToast("Image uploaded")

            setImage(null)
            setDescription('')

        }catch(error){
            showErrorToast("Something happend...")

        }finally{
            setLoading(false)
        }
    }

    return (
        <div className="max-w-md w-full bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">New image</h2>
                <button
                    onClick={() => closeModal()}
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1 hover:bg-gray-100 rounded-full"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
                <div className="relative border-2 border-dashed border-gray-300 hover:border-gray-400 rounded-lg p-8 text-center transition-colors duration-200">
                    <input
                        type="file"
                        accept="image/*"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={handleFileChange}
                    />
                    <div className="space-y-2">
                        <div className="flex justify-center">
                            {previewUrl ? (
                                <img
                                    src={previewUrl}
                                    alt="Preview"
                                    className="mx-auto max-h-48 rounded-lg object-contain"
                                />
                            ) : (
                                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                            )}
                        </div>
                        <p className="text-sm font-medium text-gray-600">Drag the image here</p>
                        <p className="text-xs text-gray-500">or click here to select the file</p>
                        <p className="text-xs text-gray-400">PNG, JPG and  JPEG</p>
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        maxLength={150}
                        id="description"
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Write a description"
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-colors duration-200"
                    />
                    <p className="text-xs text-gray-500">{description.length}/150 characters</p>
                </div>

                <button
                    onClick={handleSubmit}
                    disabled={!image || !description || loading}
                    className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${!image || !description || loading
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-blue-500 text-white hover:bg-blue-600'
                        }`} 
                >
                    {loading ? 'Uploading...' : 'Upload'} {}
                </button>
            </div>
        </div>
    )
}

export {UploadImage}