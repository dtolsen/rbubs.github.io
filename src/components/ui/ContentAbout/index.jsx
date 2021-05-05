import React from 'react';
import './About.styles.css';

const ContentAbout = ({ display, close }) => {
    if (display !== 'about') {
        return null;
    }

    return (
        <div id="content-about">
            <div className="about-header">
                <div className="about-header-left">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.7066 9.68882L12.6846 12.7112C12.4979 12.8973 12.245 13.0018 11.9813 13.0018C11.7177 13.0018 11.4648 12.8973 11.2781 12.7112L8.76791 10.1982L8.45878 10.5078C8.83651 11.3397 9.01774 12.2474 8.98844 13.1607C8.95914 14.0739 8.7201 14.9681 8.28982 15.7741C8.14916 16.0398 7.7775 16.074 7.56457 15.8615L4.20463 12.5017L3.64838 13.0579C3.67035 13.1395 3.69869 13.2142 3.69869 13.3016C3.69869 13.4994 3.64003 13.6928 3.53014 13.8573C3.42024 14.0218 3.26404 14.1499 3.08129 14.2256C2.89853 14.3013 2.69744 14.3212 2.50343 14.2826C2.30942 14.244 2.13121 14.1487 1.99133 14.0089C1.85145 13.869 1.7562 13.6908 1.7176 13.4968C1.67901 13.3028 1.69881 13.1017 1.7745 12.9189C1.8502 12.7362 1.97839 12.5799 2.14286 12.47C2.30733 12.3601 2.50069 12.3015 2.6985 12.3015C2.78594 12.3015 2.86066 12.3298 2.94222 12.3518L3.49847 11.7955L0.138475 8.43572C-0.0739627 8.22278 -0.0397752 7.8541 0.225912 7.71054C1.03197 7.28027 1.92622 7.04124 2.83946 7.01194C3.75269 6.98264 4.66043 7.16386 5.49241 7.54157L5.79863 7.23535L3.28894 4.72232C3.1029 4.53497 2.99849 4.28166 2.99849 4.01763C2.99849 3.7536 3.1029 3.50029 3.28894 3.31294L6.31141 0.290568C6.40362 0.198068 6.51325 0.124762 6.63397 0.0748885C6.75468 0.0250153 6.88408 -0.000436061 7.01469 5.65233e-06C7.27924 -0.000361264 7.53316 0.104119 7.72085 0.290568L10.231 2.80019L11.7249 1.30341C11.9219 1.10664 12.1889 0.996111 12.4673 0.996111C12.7457 0.996111 13.0127 1.10664 13.2096 1.30341L14.6942 2.78797C14.8908 2.98501 15.0012 3.25196 15.0012 3.53027C15.0012 3.80858 14.8908 4.07553 14.6942 4.27257L13.2003 5.76935L15.71 8.28238C15.8022 8.37488 15.8753 8.48467 15.9251 8.60546C15.9749 8.72625 16.0003 8.85567 16 8.98631C15.9997 9.11695 15.9736 9.24624 15.9233 9.36679C15.8729 9.48733 15.7993 9.59677 15.7066 9.68882H15.7066ZM6.86135 6.16979L9.16838 3.86282L7.01469 1.70969L4.70813 4.01616L6.86135 6.16979ZM14.2908 8.9856L12.1376 6.83197L9.8306 9.13894L11.9843 11.2921L14.2908 8.9856Z" fill="white"/>
                </svg>
                    <span>about rebase.radio</span>
                </div>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={ close }>
                    <path d="M16 0C12.8355 0 9.74207 0.938383 7.11088 2.69649C4.4797 4.45459 2.42894 6.95344 1.21793 9.87706C0.00693254 12.8007 -0.309921 16.0177 0.307443 19.1214C0.924806 22.2251 2.44866 25.0761 4.6863 27.3137C6.92394 29.5513 9.77487 31.0752 12.8786 31.6926C15.9823 32.3099 19.1993 31.9931 22.1229 30.7821C25.0466 29.5711 27.5454 27.5203 29.3035 24.8891C31.0616 22.2579 32 19.1645 32 16C32 13.8988 31.5861 11.8183 30.7821 9.87706C29.978 7.93585 28.7994 6.17203 27.3137 4.68629C25.828 3.20055 24.0641 2.022 22.1229 1.21793C20.1817 0.413852 18.1012 0 16 0ZM20.336 18.064C20.486 18.2127 20.605 18.3897 20.6862 18.5847C20.7675 18.7796 20.8093 18.9888 20.8093 19.2C20.8093 19.4112 20.7675 19.6203 20.6862 19.8153C20.605 20.0103 20.486 20.1873 20.336 20.336C20.1873 20.486 20.0103 20.605 19.8153 20.6862C19.6204 20.7675 19.4112 20.8093 19.2 20.8093C18.9888 20.8093 18.7797 20.7675 18.5847 20.6862C18.3897 20.605 18.2127 20.486 18.064 20.336L16 18.256L13.936 20.336C13.7873 20.486 13.6103 20.605 13.4153 20.6862C13.2204 20.7675 13.0112 20.8093 12.8 20.8093C12.5888 20.8093 12.3797 20.7675 12.1847 20.6862C11.9897 20.605 11.8127 20.486 11.664 20.336C11.514 20.1873 11.395 20.0103 11.3138 19.8153C11.2325 19.6203 11.1907 19.4112 11.1907 19.2C11.1907 18.9888 11.2325 18.7796 11.3138 18.5847C11.395 18.3897 11.514 18.2127 11.664 18.064L13.744 16L11.664 13.936C11.3627 13.6347 11.1935 13.2261 11.1935 12.8C11.1935 12.3739 11.3627 11.9653 11.664 11.664C11.9653 11.3627 12.3739 11.1935 12.8 11.1935C13.2261 11.1935 13.6347 11.3627 13.936 11.664L16 13.744L18.064 11.664C18.3653 11.3627 18.7739 11.1935 19.2 11.1935C19.6261 11.1935 20.0347 11.3627 20.336 11.664C20.6373 11.9653 20.8065 12.3739 20.8065 12.8C20.8065 13.2261 20.6373 13.6347 20.336 13.936L18.256 16L20.336 18.064Z" fill="white"/>
                </svg>
            </div>

            <div className="about-body">
                <p>Behind each canvas lies a universe. From my heart to yours, I'll see you when you get here.</p>             
                <p>-Bones</p>
                <p></p>
            </div>

            <div className="about-social">
                <a href="https://twitter.com/RebaseRadio" target="_blank">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6 18C6 11.373 11.373 6 18 6C24.627 6 30 11.373 30 18C30 24.627 24.627 30 18 30C11.373 30 6 24.627 6 18ZM24.066 15.645C24.249 19.685 21.236 24.189 15.902 24.189C14.28 24.189 12.771 23.713 11.5 22.898C13.024 23.078 14.545 22.654 15.752 21.709C14.496 21.686 13.435 20.855 13.068 19.714C13.519 19.8 13.963 19.775 14.366 19.665C12.985 19.387 12.031 18.143 12.062 16.812C12.45 17.027 12.892 17.156 13.363 17.171C12.084 16.316 11.722 14.627 12.474 13.336C13.89 15.074 16.007 16.217 18.394 16.337C17.975 14.541 19.338 12.81 21.193 12.81C22.018 12.81 22.765 13.159 23.289 13.717C23.943 13.589 24.559 13.349 25.113 13.02C24.898 13.691 24.443 14.253 23.85 14.609C24.431 14.539 24.985 14.385 25.499 14.156C25.115 14.734 24.629 15.24 24.066 15.645Z" fill="white"/>
                    </svg>
                    <span>twitter</span>
                </a>
            </div>

            <div className="about-social">
                <a href="mailto:bones@rebase.radio">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M18 6C11.373 6 6 11.373 6 18C6 24.627 11.373 30 18 30C24.627 30 30 24.627 30 18C30 11.373 24.627 6 18 6ZM12.1483 13.542L17.1804 17.6329C17.408 17.8175 17.724 17.8871 18.028 17.8723C18.3339 17.8871 18.6473 17.7993 18.8775 17.6121L23.9095 13.5454C24.3111 13.2162 24.2208 13 23.7087 13H12.3488C11.8374 13 11.7465 13.2129 12.1483 13.542ZM11 14.9538C11 14.4252 11.3547 14.2529 11.7641 14.5723L15.7009 17.6602L11.0997 22.4139C11.05 22.2961 11 22.1664 11 22.0304V14.9538ZM24.2653 14.5723L20.4248 17.587L24.9701 22.2884C24.9924 22.2059 25 22.1195 25 22.0302V14.9538C25 14.4252 24.6741 14.2529 24.2653 14.5723ZM18.0302 19.1209C18.2967 19.1234 18.5662 19.045 18.7719 18.8857L19.8004 18.0805L24.4713 22.9077C24.3529 22.9646 24.2219 23 24.0834 23H11.9739C11.8804 23 11.7899 22.9825 11.7045 22.9554L16.3504 18.1523L17.2855 18.8857C17.4911 19.0452 17.7606 19.1234 18.0302 19.1209Z" fill="white"/>
                    </svg>
                    <span>email</span>
                </a>
            </div>
        </div>
    );
};

export default ContentAbout;