<template>
    <button v-bind="$attrs" :class="{
        'inline-flex items-center hover:scale-95 justify-center font-medium focus:outline-none hover:translate-x-1 hover:translate-y-1 opacity-90 hover:opacity-100 transition-all duration-300 ease-in-out hover:shadow-inner ': true,
        'text-lg p-3': Object.hasOwn($attrs, 'lg'),
        'text-2xl p-4': Object.hasOwn($attrs, 'xl'),
        'text-xs p-2': Object.hasOwn($attrs, 'sm'),
        'rounded-lg': Object.hasOwn($attrs, 'rounded'),
        'border-2 bg-transparent hover:shadow-inner ': Object.hasOwn($attrs, 'outline'),
        'shadow-xl hover:shadow-md ': Object.hasOwn($attrs, 'shadow'),
        'bg-blue-600 text-white shadow-blue-200 border-blue-600': Object.hasOwn($attrs,'primary'),
        'bg-orange-600 text-white shadow-orange-200 border-orange-600': Object.hasOwn($attrs,'warning'),
        'bg-red-600 text-white shadow-rose-200 border-red-600': Object.hasOwn($attrs,'danger'),
        'bg-green-600 text-white shadow-green-100 border-green-600': Object.hasOwn($attrs,'success'),
        'text-blue-600 ':Object.hasOwn($attrs, 'outline') && Object.hasOwn($attrs, 'primary'),
        'text-orange-600 ':Object.hasOwn($attrs, 'outline') && Object.hasOwn($attrs, 'warning'),
        'text-rose-600 ':Object.hasOwn($attrs, 'outline') && Object.hasOwn($attrs, 'danger'),
        'text-green-600 ':Object.hasOwn($attrs, 'outline') && Object.hasOwn($attrs, 'success'),
    }" >
        <span v-if="Object.hasOwn($attrs,'loading')">در حال بارگذاری</span>
        <span v-else>{{ $attrs.label }}</span>
    </button>
</template>