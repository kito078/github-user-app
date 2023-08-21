import React from "react";
import { DiGrails } from "react-icons/di";

function Footer() {
  return (
    <footer class=" rounded-lg shadow  m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            class="flex items-center mb-4 sm:mb-0"
          >
            <DiGrails className="inline pr-2 text-4xl text-orange-500" />
            <span class="self-center text-2xl font-semibold text-gray-200 whitespace-nowrap ">
              MealDay
            </span>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 text-gray-400">
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <span class="block text-sm  sm:text-center text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            MealDay
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
