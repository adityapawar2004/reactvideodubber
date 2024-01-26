
import 'tailwindcss/tailwind.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('YoutubeLink');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setInputLink('');

    checkSubmitConditions();
  };
  const [uploadedFile, setUploadedFile] = useState(null);
  const [originalLanguage, setOriginalLanguage] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('');
  const [gender, setGender] = useState('');
  const [isSubmitDisabled, setSubmitDisabled] = useState(true);
  const [inputLink, setInputLink] = useState('');
  const [progress, setProgress] = useState(0);

  const uploadFunction = (file) => {

    return new Promise((resolve, reject) => {

      setTimeout(() => {

        const uploadedFileInfo = {
          name: file.name,
          size: file.size,
        };


        resolve(uploadedFileInfo);
      }, 2000);
    });
  };


  const handleDrop = (event) => {
    const file = event.target.files[0];

    uploadFunction(file)
      .then((uploadedFileInfo) => {
        setUploadedFile(uploadedFileInfo);
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
      });

  };

  const checkSubmitConditions = () => {

    const isFileUploaded = uploadedFile !== null;
    const isOriginalLanguageSelected = originalLanguage !== '';
    const isTargetLanguageSelected = targetLanguage !== '';
    const isGenderSelected = gender !== '';
    const isInputLinkFilled = inputLink.trim() !== '';
    const isTabYoutubeLink = activeTab === 'YoutubeLink';

    setSubmitDisabled(
      !(
        (isFileUploaded && isOriginalLanguageSelected && isTargetLanguageSelected && isGenderSelected) ||
        (isInputLinkFilled && isTabYoutubeLink) ||
        (isOriginalLanguageSelected && isTargetLanguageSelected && isGenderSelected && !isTabYoutubeLink)
      )
    );
  };

 
  const submissionDelay = 3000; // Adjust this value as needed
  useEffect(() => {
    checkSubmitConditions();
  }, [uploadedFile, originalLanguage, targetLanguage, gender]);

  useEffect(() => {
    if (progress === 100) {
      // Navigate to ./myprojects
      navigate('/myprojects');
    }
  }, [progress]);
  const handleSubmit = () => {
    // Check conditions before submitting
    if (activeTab === 'YoutubeLink') {
      const isInputLinkFilled = inputLink.trim() !== '';
      if (!isInputLinkFilled) {
        return;
      }
    } else if (activeTab === 'UploadVideo') {
      if (!uploadedFile) {
        return;
      }
    }
  
    if (originalLanguage === '') {
      return;
    }
  
    if (targetLanguage === '') {
      return;
    }
  
    if (gender === '') {
      return;
    }
  
    // Display progress bar
    setProgress(0);

    // Simulate a delay for the submission process
    const submissionDelay = 3000;
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 10;

        // Ensure progress does not exceed 100%
        return newProgress > 100 ? 100 : newProgress;
      });

      if (progress >= 100) {
        clearInterval(intervalId);
        setProgress(0);
        console.log('Form submitted successfully!');
      }
    }, submissionDelay / 10);
  };
  
  
  
  // The rest of your component...
  
 
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
   <div id="main_content">
      <div className="h-44 sm:h-56" >
        <ul className="flex text-center text-gray-700 items-center justify-center mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8 gap-0 cursor-pointer">
          <li>
            <a
              id="u_1"
              onClick={() => handleTabClick('YoutubeLink')}
              className={`flex-col justify-center border-b-4 py-4 px-4 text-gray-400 border-gray-200 hover:text-indigo-300 hover:border-indigo-300 ${activeTab === 'YoutubeLink' ? 'active' : ''}`}
            >
              Youtube Link
            </a>
          </li>
          <li>
            <a
              id="u_2"
              onClick={() => handleTabClick('UploadVideo')}
              className={`flex-col justify-center border-b-4 py-4 px-4 border-indigo-600 text-indigo-600 ${activeTab === 'UploadVideo' ? 'active' : ''}`}
            >
              Upload Video
            </a>
          </li>
        </ul>
        {activeTab === 'YoutubeLink' && (
          <div id="show1" className="flex items-center justify-between mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8 gap-4 m-11">
            <svg xmlns="https://www.w3.org/2000/svg" className="h-12 w-12" fill="currentColor" style={{ color: "#ff0000" }} viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
            <div className="grow">
              <label id="yturl" htmlFor="YoutubeLink" className="min-w-[25%] relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                <input type="url" onChange={(e) => {
                  setInputLink(e.target.value);
                  checkSubmitConditions();
                }} id="YoutubeLink" placeholder="Enter youtube link of the video:" className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />
                <span className="min-w-[25%] absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  Enter youtube link of the video:
                </span>
              </label>

            </div>
          </div>
        )}
        {activeTab === 'UploadVideo' && (

          <div id="show2" className="px-4">
            <form method="POST" action="/uploadvideo" encType="multipart/form-data">
              <label htmlFor="fileInput" className="cursor-pointer">
                {uploadedFile ? (
                  <div className="flex flex-col items-center  text-center m-auto w-fit p-[1rem] mt-10 rounded-xl justify-center pt-5 pb-6 bg-gray-100 cursor-pointer">
                    <p className="mb-2 text-sm text-gray-500 font-semibold">
                      {uploadedFile.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      Size: {uploadedFile.size} bytes
                    </p>
                  </div>
                ) : (
                  <div class="flex flex-col text-center items-center justify-center w-[60rem] m-auto mt-10  h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dz-message"   data-dz-message="">
                    <div id="dropzone-file" class="flex flex-col items-center text-center justify-center pt-5 pb-6">
                      <svg class="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"></path>
                      </svg>
                      <p class="mb-2 text-sm text-gray-500"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                      <p class="text-xs text-gray-500">
                        (MAX. 200MB for free tier) <a class="text-indigo-700 text-bold" href="/buypro">Subscribe to Pro now!</a>
                      </p>
                    </div>
                  </div>
                )}
                <input
                  type="file"
                  id="fileInput"
                  accept=".mp4"
                  className="hidden"
                  onChange={handleDrop}
                />
              </label>
            </form>
          </div>

        )}
      </div>
      <section className="items-center justify-between mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8 gap-4">
        <form>
          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <div className="block w-[100%] col-span-1">
              <label htmlFor="HeadlineAct1" className="block text-sm font-medium text-gray-900">
                Original Language
              </label>
              <select name="HeadlineAct1" id="HeadlineAct1" onChange={(event) => {
                const selectedLanguage = event.target.value;
                setOriginalLanguage(selectedLanguage);
                checkSubmitConditions();
              }} className="mt-2 p-1.5 w-[100%] rounded-lg border-gray-300 text-gray-700 sm:text-sm shadow-md" style={{ borderWidth: "1px" }} required="" defaultValue="">
                <option value="" disabled="">Please select</option>
                <option value="en">English</option>
                <option value="af">Afrikaans</option>
                <option value="ar">Arabic</option>
                <option value="hy">Armenian</option>
                <option value="az">Azerbaijani</option>
                <option value="be">Belarusian</option>
                <option value="bs">Bosnian</option>
                <option value="bg">Bulgarian</option>
                <option value="ca">Catalan</option>
                <option value="zh">Chinese</option>
                <option value="hr">Croatian</option>
                <option value="cs">Czech</option>
                <option value="da">Danish</option>
                <option value="nl">Dutch</option>
                <option value="et">Estonian</option>
                <option value="fi">Finnish</option>
                <option value="fr">French</option>
                <option value="gl">Galician</option>
                <option value="de">German</option>
                <option value="el">Greek</option>
                <option value="he">Hebrew</option>
                <option value="hi">Hindi</option>
                <option value="hu">Hungarian</option>
                <option value="is">Icelandic</option>
                <option value="id">Indonesian</option>
                <option value="it">Italian</option>
                <option value="ja">Japanese</option>
                <option value="kn">Kannada</option>
                <option value="kk">Kazakh</option>
                <option value="ko">Korean</option>
                <option value="lv">Latvian</option>
                <option value="lt">Lithuanian</option>
                <option value="mk">Macedonian</option>
                <option value="ms">Malay</option>
                <option value="mr">Marathi</option>
                <option value="mi">Maori</option>
                <option value="ne">Nepali</option>
                <option value="no">Norwegian</option>
                <option value="fa">Persian</option>
                <option value="pl">Polish</option>
                <option value="pt">Portuguese</option>
                <option value="ro">Romanian</option>
                <option value="ru">Russian</option>
                <option value="sr">Serbian</option>
                <option value="sk">Slovak</option>
                <option value="sl">Slovenian</option>
                <option value="es">Spanish</option>
                <option value="sw">Swahili</option>
                <option value="sv">Swedish</option>
                <option value="tl">Tagalog</option>
                <option value="ta">Tamil</option>
                <option value="th">Thai</option>
                <option value="tr">Turkish</option>
                <option value="uk">Ukrainian</option>
                <option value="ur">Urdu</option>
                <option value="vi">Vietnamese</option>
                <option value="cy">Welsh</option>
              </select>
            </div>
            <div className="block w-[100%] col-span-1">
              <label htmlFor="HeadlineAct2" className="block text-sm font-medium text-gray-900">
                Target Language
              </label>
              <select name="HeadlineAct2" id="HeadlineAct2" onChange={(event) => {
                const selectedLanguage = event.target.value;
                setTargetLanguage(selectedLanguage);
                checkSubmitConditions();
              }} className="mt-2 p-1.5 w-[100%] rounded-lg border-gray-300 text-gray-700 sm:text-sm shadow-md" style={{ borderWidth: "1px" }} required="" defaultValue="">
                <option value="" disabled="" >Please select</option>
                <option value="ar-XA">Arabic</option>
                <option value="bn-IN">Bengali (India)</option>
                <option value="cmn-CN">Chinese Mandarin (Mainland)</option>
                <option value="cmn-TW">Chinese Mandarin (Taiwanese)</option>
                <option value="yue-HK">Chinese Yue (Hong Kong)</option>
                <option value="nl-BE">Dutch (Belgium)</option>
                <option value="nl-NL">Dutch (Netherlands)</option>
                <option value="en-AU">English (Australia)</option>
                <option value="en-IN">English (India)</option>
                <option value="en-GB">English (UK)</option>
                <option value="en-US">English (US)</option>
                <option value="fr-CA">French (Canada)</option>
                <option value="fr-FR">French (France)</option>
                <option value="de-DE">German (Germany)</option>
                <option value="gu-IN">Gujarati (India)</option>
                <option value="hi-IN">Hindi (India)</option>
                <option value="id-ID">Indonesian (Indonesia)</option>
                <option value="it-IT">Italian (Italy)</option>
                <option value="ja-JP">Japanese (Japan)</option>
                <option value="kn-IN">Kannada (India)</option>
                <option value="ko-KR">Korean (South Korea)</option>
                <option value="ml-IN">Malayalam (India)</option>
                <option value="mr-IN">Marathi (India)</option>
                <option value="pl-PL">Polish (Poland)</option>
                <option value="pt-BR">Portuguese (Brazil)</option>
                <option value="pt-PT">Portuguese (Portugal)</option>
                <option value="pa-IN">Punjabi (India)</option>
                <option value="ru-RU">Russian (Russia)</option>
                <option value="es-ES">Spanish (Spain)</option>
                <option value="es-US">Spanish (US)</option>
                <option value="ta-IN">Tamil (India)</option>
                <option value="tr-TR">Turkish (Turkey)</option>
                <option value="vi-VN">Vietnamese (Vietnam)</option>
              </select>
            </div>
            <div className="block w-[100%] col-span-1">
              <label htmlFor="HeadlineAct3" className="block text-sm font-medium text-gray-900">
                Gender
              </label>
              <select name="HeadlineAct3" id="HeadlineAct3" onChange={(event) => {
                const selectedGender = event.target.value;
                setGender(selectedGender);
                checkSubmitConditions();
              }} className="mt-2 p-1.5 w-[100%] rounded-lg border-gray-300 text-gray-700 sm:text-sm shadow-md" style={{ borderWidth: "1px" }} required="" defaultValue="">
                <option value="" disabled="" >Please select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="block w-[100%] col-span-1 hidden">
              <label htmlFor="HeadlineAct4" className="block text-sm font-medium text-gray-900">
                Background Music?
              </label>
              <select name="HeadlineAct4" id="HeadlineAct4" className="mt-2 p-1.5 w-[100%] rounded-lg border-gray-300 text-gray-700 sm:text-sm shadow-md" style={{ borderWidth: "1px" }}>
                <option value="Default">Only Voiceover</option>
                <option value="Advanced">Keep Background Music</option>
              </select>
            </div>
            <div className="hidden block w-[100%] col-span-1">
              <label htmlFor="HeadlineAct5" className="block text-sm font-medium text-gray-900">
                Voice Cloning
              </label>
              <select name="HeadlineAct5" id="HeadlineAct5" className="mt-2 p-1.5 w-[100%] rounded-lg border-gray-300 text-gray-700 sm:text-sm shadow-md" style={{ borderWidth: "1px" }} required="">
                <option value="" disabled="" selected="">Please select</option>
                <option value="1">No Voice Cloning</option>
                <option value="2">Original Voice of Creator</option>
                <option value="3">Custom Voice</option>
              </select>
            </div>
          </div>
        </form>
      </section>
      <div className="cursor-pointer justify-center flex" id="submit_button">
        <button
          className="group relative inline-block focus:outline-none focus:ring"
          id="uploadButton"
          onClick={handleSubmit}
          disabled={isSubmitDisabled}
        >
          <span
            id="uploadbuttonbg"
            className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
          ></span>
          <span
            id="uploadbuttontxt"
            className={`relative inline-block border-2 border-current px-2 py-2 sm:px-8 sm:py-3 text-xs sm:text-sm font-bold uppercase tracking-widest ${isSubmitDisabled ? 'text-gray-500 cursor-not-allowed' : 'text-black group-active:text-opacity-75'
              }`}
          >
            Submit
          </span>
        </button>
      </div>
      {/* <p id="time_remaining" className="w-[80%] mx-auto justify-center my-4 hidden text-sm"></p> */}
      {/* <div id="counterp" className="w-[80%] mx-auto justify-center bg-gray-200 rounded-full dark:bg-gray-700 my-4 hidden">
<div id="counter" className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-1.5 leading-none rounded-full" style={{width: "0%"}}>Processing 0%</div>
</div> */}
        <div id="counterp" className={`w-[80%] mx-auto justify-center bg-gray-200 rounded-full dark:bg-gray-700 my-4 ${progress === 0 ? 'hidden' : ''}`}>
          <div id="counter" className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-1.5 leading-none rounded-full" style={{ width: `${progress}%` }}>
            Processing <span id="progressText">{progress.toFixed(2)}%</span>
          </div>
        </div>

    </div>
  </>

  )
}

export default Dashboard