import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const facilities = ["Ikoyi", "Ikeja", "Idejo", "VI", "Wellness", "Work-site"];

export default function Registration() {
  const [form, setForm] = useState({
    title: '',
    fullName: '',
    department: '',
    employeeNumber: '',
    facility: '',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!form.title) newErrors.title = 'Title is required';
    if (!form.fullName) newErrors.fullName = 'Full Name is required';
    if (!form.department) newErrors.department = 'Department is required';
    if (!form.employeeNumber) newErrors.employeeNumber = 'Employee Number is required';
    if (!form.facility) newErrors.facility = 'Facility is required';
    if (!form.email) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = 'Invalid email address';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setApiError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');
    if (!validate()) return;
    setSubmitting(true);
    const payload = { ...form, date: new Date().toISOString() };
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        navigate('/thank-you');
      } else {
        setApiError('Registration failed. Please try again or contact support.');
      }
    } catch (err) {
      setApiError('Could not connect to the registration server. For demo/testing, you will be redirected.');
      setTimeout(() => navigate('/thank-you'), 1200); // fallback for demo
    }
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md" onSubmit={handleSubmit} noValidate>
        <h2 className="text-2xl font-bold mb-6 text-center">Training Registration</h2>
        {apiError && <div className="mb-4 text-red-600 font-semibold">{apiError}</div>}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Title<span className="text-red-500">*</span></label>
          <input name="title" value={form.title} onChange={handleChange} className={`w-full border rounded px-3 py-2 ${errors.title ? 'border-red-500' : 'border-gray-300'}`} required />
          {errors.title && <div className="text-red-500 text-sm mt-1">{errors.title}</div>}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Full Name<span className="text-red-500">*</span></label>
          <input name="fullName" value={form.fullName} onChange={handleChange} className={`w-full border rounded px-3 py-2 ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`} required />
          {errors.fullName && <div className="text-red-500 text-sm mt-1">{errors.fullName}</div>}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Department<span className="text-red-500">*</span></label>
          <input name="department" value={form.department} onChange={handleChange} className={`w-full border rounded px-3 py-2 ${errors.department ? 'border-red-500' : 'border-gray-300'}`} required />
          {errors.department && <div className="text-red-500 text-sm mt-1">{errors.department}</div>}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Employee Number<span className="text-red-500">*</span></label>
          <input name="employeeNumber" value={form.employeeNumber} onChange={handleChange} className={`w-full border rounded px-3 py-2 ${errors.employeeNumber ? 'border-red-500' : 'border-gray-300'}`} required />
          {errors.employeeNumber && <div className="text-red-500 text-sm mt-1">{errors.employeeNumber}</div>}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email Address<span className="text-red-500">*</span></label>
          <input name="email" type="email" value={form.email} onChange={handleChange} className={`w-full border rounded px-3 py-2 ${errors.email ? 'border-red-500' : 'border-gray-300'}`} required />
          {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-medium">Facility<span className="text-red-500">*</span></label>
          <select name="facility" value={form.facility} onChange={handleChange} className={`w-full border rounded px-3 py-2 ${errors.facility ? 'border-red-500' : 'border-gray-300'}`} required>
            <option value="">Select Facility</option>
            {facilities.map(f => <option key={f} value={f}>{f}</option>)}
          </select>
          {errors.facility && <div className="text-red-500 text-sm mt-1">{errors.facility}</div>}
        </div>
        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Register'}
        </button>
      </form>
    </div>
  );
} 