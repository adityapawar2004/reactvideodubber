import React from 'react';
import 'tailwindcss/tailwind.css';
import { useLocation } from 'react-router-dom';

const MyProjects = () => {
  const location = useLocation();
  const targetLanguage = location.state?.targetLanguage || 'Default';

  return (
    <>
      <div class="mx-auto max-w-screen-xl px-4 py-8 md:px-6 sm:py-12 lg:px-8">
<div class="flex items-center justify-between">
<div class="text-left">
<div class="ml-0 bg-gradient-to-r from-blue-600 via-red-500 to-red-600 bg-clip-text text-lg font-extrabold text-transparent md:text-2xl justify-center">
<a class="cursor-pointer" href="/">
VideoDubber. <img class="inline-flex h-6 md:h-8" src="https://cdn.jsdelivr.net/gh/souvic/autodubber/assets/autodubber-logo-1.png" alt="VideoDubber logo"/>
</a></div><a class="cursor-pointer" href="/">

<p class="mt-1.5 text-sm text-gray-500">
</p>
</a>
</div>
<div class="flex gap-4 mt-0 flex-row items-center">
<button class="hidden sm:inline-flex items-center justify-center gap-1.5 rounded-lg px-0 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none" type="button">
<span id="credits" class="text-sm font-medium text-bold text-black"> 5 </span>
<svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-cash-coin" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"></path>
<path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"></path>
<path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"></path>
<path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"></path>
</svg>
</button>
<button class="hidden sm:inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-3 py-2 md:px-5 md:py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none" type="button" onclick="window.location='/pricing'">
<span class="text-sm font-medium"> Subscribe to Pro </span>
<svg xmlns="https://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
</svg>
</button>
<button class="hidden sm:inline-flex items-center justify-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-2 md:px-5 md:py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none" type="button" onclick="window.location='/'"><span class="text-sm font-medium">+ Create New </span></button>
<div class="inline-block text-left items-center justify-center">
<div class="inline-flex">
<button id="menu-button" aria-expanded="true" aria-haspopup="true" type="button" aria-label="Menu Button Toggler" class="select-none cursor-pointer rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[0px] sm:p-[2px] text-white focus:outline-none active:text-opacity-75 " onclick="document.getElementById('menu_1').classList.toggle('hidden')">
<span class="block rounded-full bg-transparent h-12 w-12 pt-3 text-md font-medium text-center uppercase">
A
</span>
</button>
</div>

<div id="menu_1" class="select-none absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
<div class="py-1" role="none">

<div class="flex text-gray-700 border-b-2 px-4 py-2 text-sm sm:hidden" role="menuitem" tabindex="-1" id="menu-item-1">
<span id="credits" class="text-sm font-medium text-bold text-black"> 5 </span>
<svg xmlns="https://www.w3.org/2000/svg" width="20" height="20" fill="green" class="bi bi-cash-coin pt-1" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"></path>
<path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"></path>
<path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"></path>
<path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"></path>
</svg>
</div>
<a href="/" class="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm sm:hidden" role="menuitem" tabindex="-1" id="menu-item-1">Create New</a>
<a href="/pricing" class="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm sm:hidden" role="menuitem" tabindex="-1" id="menu-item-1">Subscribe to Pro</a>
<a href="/myprojects" class="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">My Projects</a>
<a href="/blogs" class="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Blogs</a>
<a href="/logout_with_feedback" class="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Log Out</a>
</div>
</div>
</div>

</div>
</div>
</div>
      <div className='flex justify-center'>
        <div className='w-[80rem] mt-10'>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 text-gray-400 ">
            <thead className="text-md text-gray-700  bg-gray-50  border-b  dark:border-gray-700 text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Index
                </th>
                <th scope="col" className="px-6 py-3">
                  First Translated Video
                </th>
                <th scope="col" className="px-6 py-3">
                  Languages
                </th>
                <th scope="col" className="px-6 py-3">
                  Output Files (zip/srt)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b  dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  #1
                </th>
                <td className="px-6 py-4">
                  <video width="220" height="240" controls>
                    <source src="" />
                  </video>
                </td>
                <td className="px-6 py-4">
                <div class="rounded-full w-fit bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700 my-0.5">{targetLanguage}</div>
                </td>
                <td className="px-6 py-4">
                <td class="whitespace-nowrap text-gray-700 text-center">
<a href="/outputs/ad60imi01ya72cdic2t078at0ei96nji1b/videos/0/subtitles.srt" download="subtitles.srt" className="flex min-[640px]:w-[10rem] justify-center  inline-block rounded-lg bg-indigo-600 py-2 px-4 m-2  text-xs lg:text-sm font-medium text-white hover:bg-indigo-700">SRT &nbsp;
<svg xmlns="https://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cloud-arrow-down" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z"></path>
<path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"></path>
</svg>
</a>
<a href="/outputs/ad60imi01ya72cdic2t078at0ei96nji1b/videos/0/tr-srts.zip" download="tr-subs.zip" className="flex   justify-center  inline-block rounded-lg bg-indigo-600 py-2 px-4 m-2  text-xs lg:text-sm font-medium text-white hover:bg-indigo-700">Tr-SRTs &nbsp;
<svg xmlns="https://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cloud-arrow-down" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z"></path>
<path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"></path>
</svg>
</a>
<a href="/outputs/ad60imi01ya72cdic2t078at0ei96nji1b/videos/0/dubs.zip" download="dubs.zip" className="flex  justify-center  inline-block rounded-lg bg-indigo-600 py-2 px-4 m-2  text-xs lg:text-sm font-medium text-white hover:bg-indigo-700">MP4s &nbsp;
<svg xmlns="https://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cloud-arrow-down" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z"></path>
<path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"></path>
</svg>
</a>
<a href="#" class="flex  justify-center  inline-block rounded-lg bg-indigo-600 py-2 px-4 m-2  text-xs lg:text-sm font-medium text-white hover:bg-indigo-700 hidden">Em-MP4s &nbsp;
<svg xmlns="https://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cloud-arrow-down" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z"></path>
<path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"></path>
</svg>
</a>
<a href="#" className="flex  justify-center  inline-block rounded-lg bg-green-600 py-2 px-4 m-2  text-xs lg:text-sm font-medium text-white hover:bg-green-700 hidden">Embed MP4s?
</a>
<a href="#" className="flex  justify-center  inline-block rounded-lg bg-green-600 py-2 px-4 m-2  text-xs lg:text-sm font-medium text-white hover:bg-green-700 hidden">Translate?
</a>
<a href="/?ProjectID=0" className="flex hidden  justify-center  inline-block rounded-lg bg-green-600 py-2 px-4 m-2  text-xs lg:text-sm font-medium text-white hover:bg-green-700">Auto Dub now?
</a>
<a href="#" className="flex hidden  justify-center animate-pulse  inline-block rounded-lg bg-indigo-600 py-2 px-4 m-2  text-xs lg:text-sm font-medium text-white hover:bg-indigo-700">
<svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
</svg>
Processing...
</a>
<a href="#" className="flex hidden  justify-center animate-pulse  inline-block rounded-lg bg-indigo-600 py-2 px-4 m-2  text-xs lg:text-sm font-medium text-white hover:bg-indigo-700">
<svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
</svg>
Voice Cloning...
</a>
<a href="/outputs/ad60imi01ya72cdic2t078at0ei96nji1b/videos/0/vcdubs.zip" download="vcdubs.zip" className="flex hidden  justify-center  inline-block rounded-lg bg-indigo-600 py-2 px-4 m-2  text-xs lg:text-sm font-medium text-white hover:bg-indigo-700">Voice Cloned MP4s &nbsp;
<svg xmlns="https://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cloud-arrow-down" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z"></path>
<path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"></path>
</svg>
</a>
</td>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="flex font-bold pt-6 px-6 justify-center text-center">In the free trial only 40 secs of watermark-free video is translated.</div>
      <div class="flex font-bold py-2 px-6 justify-center text-center"> To unlock the full video and other advanced features like subtitle editing and voice cloning keeping your original voice, subscribe to the pro version.</div>
    </>
  );
}

export default MyProjects;
