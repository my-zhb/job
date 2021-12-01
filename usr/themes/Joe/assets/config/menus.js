export default [
  {
    type: 'undo',
    title: '撤销',
    innerHTML: '<svg class="cm-menu-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="20" height="20"><path d="M76 463.7l294.8 294.9c19.5 19.4 52.8 5.6 52.8-21.9V561.5c202.5-8.2 344.1 59.5 501.6 338.3 8.5 15 31.5 7.9 30.6-9.3-30.5-554.7-453-571.4-532.3-569.6v-174c0-27.5-33.2-41.3-52.7-21.8L75.9 420c-12 12.1-12 31.6.1 43.7z"/></svg>',
  },
  {
    type: 'redo',
    title: '重做',
    innerHTML: '<svg class="cm-menu-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="20" height="20"><path d="M946.8 420L651.9 125.1c-19.5-19.5-52.7-5.7-52.7 21.8v174c-79.3-1.8-501.8 14.9-532.3 569.6-.9 17.2 22.1 24.3 30.6 9.3C255 621 396.6 553.3 599.1 561.5v175.2c0 27.5 33.3 41.3 52.8 21.9l294.8-294.9c12.1-12.1 12.1-31.6.1-43.7z"/></svg>',
  },
  {
    type: 'markdown',
    title: 'Markdown',
    innerHTML: '<svg class="cm-menu-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="20" height="20"><path d="M557.972 254.157l.574 7.644v505.605c0 25.78-20.838 46.674-46.546 46.674-23.137 0-42.327-16.927-45.937-39.101l-.609-7.573v-365.67L316.514 600.95c-17.07 22.814-49.782 24.714-69.459 5.703l-5.017-5.703L93.092 401.74v365.671a46.643 46.643 0 0 1-38.994 46.06l-7.557.609c-23.137 0-42.327-16.927-45.937-39.101L0 767.406v-505.6c0-42.22 50.442-61.558 78.75-33.777l5.034 5.77L279.27 495.156l195.492-261.36c25.262-33.772 77.19-18.898 83.21 20.362zM800.83 808.832l-.225-.123a46.47 46.47 0 0 1-4.767-2.898l-.066-.051a46.812 46.812 0 0 1-6.339-5.31l-.04-.04L634.24 644.838c-18.176-18.227-18.176-47.774 0-66.002a46.464 46.464 0 0 1 59.377-5.401l6.45 5.401 75.69 75.874V261.8c0-25.774 20.838-46.669 46.546-46.669 23.137 0 42.327 16.922 45.936 39.102l.61 7.567-.005 392.914 75.699-75.879a46.464 46.464 0 0 1 59.376-5.401l6.452 5.401c16.153 16.2 17.95 41.35 5.38 59.541l-5.386 6.461-155.15 155.572-.2.2a46.879 46.879 0 0 1-4.793 4.146l-.379.282a42.332 42.332 0 0 1-1.807 1.275c-.123.072-.24.154-.359.23a45.312 45.312 0 0 1-4.766 2.73l-.691.332a24.627 24.627 0 0 1-1.306.594 34.53 34.53 0 0 1-1.726.717 42.24 42.24 0 0 1-1.024.384l-.184.066a45.947 45.947 0 0 1-8.054 2.09l-.42.066a26.89 26.89 0 0 1-.926.138l-.497.062a29.04 29.04 0 0 1-.793.092l-.594.061a36.915 36.915 0 0 1-1.004.082l-.2.015c-.42.031-.85.052-1.28.067l-.102.005a45.24 45.24 0 0 1-1.449.036h-.962l-.553-.015 1.157.015a47.232 47.232 0 0 1-3.635-.138l-.205-.02a37.98 37.98 0 0 1-.973-.088l-.497-.056a45.916 45.916 0 0 1-6.81-1.295l-.158-.052a42.926 42.926 0 0 1-2.52-.757l-.322-.113a36.874 36.874 0 0 1-1.029-.369l-.256-.097a39.245 39.245 0 0 1-2.724-1.126 68.844 68.844 0 0 1-2.345-1.137z"/></svg>',
    children: [
      {
        type: 'italic',
        title: '倾斜',
        innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="20" height="20"><path d="M640 853.333H298.667V768h124.885l90.283-512H384v-85.333h341.333V256H600.448l-90.283 512H640z"></path></svg>'
      },
      {
        type: 'bold',
        title: '加粗',
        innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="20" height="20"><path d="M341.333 469.333h192a106.667 106.667 0 1 0 0-213.333h-192v213.333zm426.667 192a192 192 0 0 1-192 192H256V170.667h277.333a192 192 0 0 1 138.923 324.522A191.915 191.915 0 0 1 768 661.333zM341.333 554.667V768H576a106.667 106.667 0 1 0 0-213.333H341.333z"/></svg>'
      },
      {
        type: 'line-through',
        title: '删除',
        innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="20" height="20"><path d="M731.904 597.333c9.813 22.016 14.763 46.507 14.763 73.387 0 57.259-22.358 102.059-67.03 134.272-44.757 32.213-106.496 48.341-185.301 48.341-69.973 0-139.221-16.256-207.787-48.81v-96.256c64.854 37.418 131.2 56.149 199.083 56.149 108.843 0 163.413-31.232 163.797-93.739a94.293 94.293 0 0 0-27.648-68.394l-5.12-4.992H128v-85.334h768v85.334H731.904zm-173.995-128H325.504a174.336 174.336 0 0 1-20.523-22.272c-18.432-23.808-27.648-52.565-27.648-86.442 0-52.736 19.883-97.579 59.606-134.528 39.808-36.95 101.29-55.424 184.533-55.424 62.763 0 122.837 13.994 180.139 41.984v91.818c-51.2-29.312-107.307-43.946-168.363-43.946-105.813 0-158.677 33.365-158.677 100.096 0 17.92 9.301 33.536 27.904 46.89 18.602 13.355 41.557 23.979 68.821 32 26.453 7.68 55.339 17.664 86.613 29.824z"/></svg>'
      },
      {
        type: 'marker',
        title: '标记',
        innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="20" height="20"><path d="M416.328 512.336a96 96 0 1 0 192 0 96 96 0 1 0-192 0zm-80 347.664c-12.288 0-24.568-6-33.944-17.992l-224-286.584c-18.744-23.984-18.744-62.856 0-86.84l224-286.592c18.744-23.976 49.136-23.976 67.88 0 18.744 23.984 18.744 62.864 0 86.848L180.208 512l190.056 243.168c18.744 23.968 18.744 62.856 0 86.832-9.368 12-21.648 18-33.936 18zm352 0c12.28 0 24.568-6 33.936-17.992l224-286.584c18.752-23.984 18.752-62.856 0-86.84l-224-286.592c-18.744-23.976-49.136-23.976-67.872 0-18.752 23.984-18.752 62.864 0 86.848L844.448 512 654.392 755.168c-18.752 23.968-18.752 62.856 0 86.832 9.376 12 21.656 18 33.936 18z"/></svg>'
      },
      {
        type: 'split-line',
        title: '分割线',
        innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="20" height="20"><path d="M896 469.333H128c-25.6 0-42.667 17.067-42.667 42.667S102.4 554.667 128 554.667h768c25.6 0 42.667-17.067 42.667-42.667S921.6 469.333 896 469.333z"/></svg>'
      },
      {
        type: 'code-block',
        title: '代码块',
        innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M902.4 454.4l-144-144a40.704 40.704 0 0 0-57.6 57.6l144 144-144 144a40.704 40.704 0 0 0 57.6 57.6l144-144a81.472 81.472 0 0 0 0-115.2zm-636.8-144l-144 144a81.472 81.472 0 0 0 0 115.2l144 144a40.704 40.704 0 0 0 57.6-57.6l-144-144 144-144a40.704 40.704 0 0 0-57.6-57.6zm109.568 544.064l195.072-706.56a40.704 40.704 0 0 1 78.528 21.632l-195.072 706.56a40.704 40.704 0 0 1-78.528-21.696z"/></svg>'
      },
      {
        type: 'block-quotations',
        title: '区块引用',
        innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M195.541 739.03C151.595 692.351 128 640 128 555.135c0-149.333 104.832-283.179 257.28-349.355l38.101 58.795c-142.293 76.97-170.112 176.853-181.205 239.83 22.912-11.862 52.907-16 82.304-13.27 76.97 7.125 137.643 70.315 137.643 148.864a149.333 149.333 0 0 1-149.334 149.333 165.163 165.163 0 0 1-117.248-50.304zm426.667 0c-43.947-46.678-67.541-99.03-67.541-183.894 0-149.333 104.832-283.179 257.28-349.355l38.101 58.795c-142.293 76.97-170.112 176.853-181.205 239.83 22.912-11.862 52.906-16 82.304-13.27 76.97 7.125 137.642 70.315 137.642 148.864a149.333 149.333 0 0 1-149.333 149.333 165.163 165.163 0 0 1-117.248-50.304z"/></svg>'
      },
      {
        type: 'link',
        title: '超链接',
        innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M614.4 477.867c-20.48 0-34.133 13.653-34.133 34.133 0 75.093-61.44 136.533-136.534 136.533h-204.8C163.84 648.533 102.4 587.093 102.4 512s61.44-136.533 136.533-136.533h102.4c20.48 0 34.134-13.654 34.134-34.134S361.813 307.2 341.333 307.2h-102.4c-116.053 0-204.8 88.747-204.8 204.8s88.747 204.8 204.8 204.8h204.8c116.054 0 204.8-88.747 204.8-204.8 0-20.48-13.653-34.133-34.133-34.133z"/><path d="M785.067 307.2h-204.8c-116.054 0-204.8 88.747-204.8 204.8 0 20.48 13.653 34.133 34.133 34.133S443.733 532.48 443.733 512c0-75.093 61.44-136.533 136.534-136.533h204.8c75.093 0 136.533 61.44 136.533 136.533s-61.44 136.533-136.533 136.533h-102.4c-20.48 0-34.134 13.654-34.134 34.134s13.654 34.133 34.134 34.133h102.4c116.053 0 204.8-88.747 204.8-204.8s-88.747-204.8-204.8-204.8z"/></svg>'
      },
      {
        type: 'picture',
        title: '本地/网络图片',
        innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M288 480c54.4 0 96-41.6 96-96s-41.6-96-96-96-96 41.6-96 96 41.6 96 96 96zm0-128c19.2 0 32 12.8 32 32s-12.8 32-32 32-32-12.8-32-32 12.8-32 32-32z"/><path d="M864 160H160c-54.4 0-96 41.6-96 96v512c0 54.4 41.6 96 96 96h704c54.4 0 96-41.6 96-96V256c0-54.4-41.6-96-96-96zM128 768V256c0-19.2 12.8-32 32-32h704c19.2 0 32 12.8 32 32v364.8L726.4 451.2c-38.4-38.4-99.2-38.4-134.4 0L243.2 800H160c-19.2 0-32-12.8-32-32zm736 32H332.8l304-304c12.8-12.8 32-12.8 44.8 0L896 710.4V768c0 19.2-12.8 32-32 32z"/></svg>'
      },
      {
        type: 'ordered-list',
        title: '有序列表',
        innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M341.333 170.667H896V256H341.333v-85.333zm-128-42.667v128H256v42.667H128V256h42.667v-85.333H128V128h85.333zM128 597.333V490.667h85.333v-21.334H128v-42.666h128v106.666h-85.333v21.334H256v42.666H128zM213.333 832H128v-42.667h85.333V768H128v-42.667h128V896H128v-42.667h85.333V832zm128-362.667H896v85.334H341.333v-85.334zm0 298.667H896v85.333H341.333V768z"/></svg>'
      },
      {
        type: 'unordered-list',
        title: '无序列表',
        innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M341.333 170.667H896V256H341.333v-85.333zM192 277.333a64 64 0 1 1 0-128 64 64 0 0 1 0 128zM192 576a64 64 0 1 1 0-128 64 64 0 0 1 0 128zm0 294.4a64 64 0 1 1 0-128 64 64 0 0 1 0 128zm149.333-401.067H896v85.334H341.333v-85.334zm0 298.667H896v85.333H341.333V768z"/></svg>'
      },
    ],
  },
  {
    type: 'title',
    title: '标题',
    innerHTML: '<svg class="cm-menu-item-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M851.968 167.936v109.568h-281.6V865.28H453.632V277.504h-281.6V167.936h679.936z"/></svg>',
    children: [
      {
        type: 'title',
        title: '一级标题',
        innerHTML: 'H1',
        field: '# ',
      },
      {
        type: 'title',
        title: '二级标题',
        innerHTML: 'H2',
        field: '## ',
      },
      {
        type: 'title',
        title: '三级标题',
        innerHTML: 'H3',
        field: '### ',
      },
      {
        type: 'title',
        title: '四级标题',
        innerHTML: 'H4',
        field: '#### ',
      },
      {
        type: 'title',
        title: '五级标题',
        innerHTML: 'H5',
        field: '##### ',
      },
      {
        type: 'title',
        title: '六级标题',
        innerHTML: 'H6',
        field: '###### ',
      },
    ],
  },
  {
    type: 'extra-function',
    title: '额外功能',
    innerHTML: '<svg class="cm-menu-item-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path d="M1016.992 492l-256-320A32.02 32.02 0 0 0 736 160H288a32.02 32.02 0 0 0-24.992 12l-256 320C2.464 497.664 0 504.736 0 512v288c0 35.36 28.64 64 64 64h896c35.36 0 64-28.64 64-64V512a32.045 32.045 0 0 0-7.008-20zM960 544H736L608 672H416L288 544H64v-20.768L303.392 224H720.64l239.392 299.232V544H960z"/></svg>',
    children: [
      {
        type: 'indent',
        title: '缩进',
        innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M281.676 461.156l-14.745-14.745a50.844 50.844 0 0 1 71.69-72.198l107.79 107.789a50.844 50.844 0 0 1 0 71.69l-107.79 107.281a50.844 50.844 0 1 1-71.69-71.69l27.456-27.456H156.091a50.844 50.844 0 0 1 0-101.688zM868.417 156.09a50.844 50.844 0 0 1 0 101.689H156.6a50.844 50.844 0 0 1 0-101.689zm0 610.13a50.844 50.844 0 0 1 0 101.688H156.6a50.844 50.844 0 0 1 0-101.689zm0-305.065a50.844 50.844 0 0 1 0 101.688H563.353a50.844 50.844 0 0 1 0-101.688z"/></svg>'
      },
      {
        type: 'typeface',
        title: '字体符号',
        innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M128 857.024c0-21.504 17.472-38.976 38.976-38.976H339.2c-61.952-45.568-108.352-96.96-139.328-154.176-30.976-57.216-46.528-120.192-46.528-189.056 0-101.312 33.664-184.32 100.736-249.344C321.152 160.512 407.168 128 512 128c104.768 0 190.72 32.384 257.92 97.216 67.008 64.768 100.672 147.968 100.672 249.6 0 69.184-15.552 132.352-46.528 189.568C793.088 721.6 746.688 772.8 684.8 817.984h172.16a39.04 39.04 0 1 1 0 78.016H598.592a19.2 19.2 0 0 1-19.2-19.2v-58.752c58.432-38.464 102.4-85.76 131.776-141.76 29.44-56 44.096-120.832 44.096-194.432 0-86.016-21.504-153.6-64.64-202.496C647.68 230.464 588.032 206.08 512 206.08c-75.84 0-135.296 24.448-178.56 73.344-43.2 49.024-64.832 116.672-64.832 203.008 0 73.216 14.72 137.792 44.16 193.664 29.376 55.808 73.472 103.168 132.224 142.016v58.752a19.2 19.2 0 0 1-19.2 19.2H167.04a38.976 38.976 0 0 1-39.04-39.04z"/></svg>'
      },
      {
        type: 'table',
        title: '表格',
        innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path d="M874.675 64A85.325 85.325 0 0 1 960 149.325v725.35A85.325 85.325 0 0 1 874.675 960h-725.35A85.325 85.325 0 0 1 64 874.675v-725.35A85.325 85.325 0 0 1 149.325 64zm-405.35 490.65h-320v320h320v-320zm405.325 0h-320v320h320v-320zM469.325 149.325h-320v320h320v-320zm405.35 0H554.65v320h320v-320z"/></svg>'
      },
      {
        type: 'emoji',
        title: 'emoji表情',
        innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M512 85.333c235.648 0 426.667 191.019 426.667 426.667S747.648 938.667 512 938.667 85.333 747.648 85.333 512 276.352 85.333 512 85.333zm208.341 500.182a42.667 42.667 0 0 0-60.074 5.802A191.488 191.488 0 0 1 512 661.333c-58.027 0-111.787-25.856-148.053-69.76a42.667 42.667 0 0 0-65.792 54.358A276.821 276.821 0 0 0 512 746.667c83.925 0 161.792-37.547 214.144-101.12a42.667 42.667 0 0 0-5.803-60.032zM362.667 341.333A42.667 42.667 0 0 0 320 384v64a42.667 42.667 0 0 0 85.333 0v-64a42.667 42.667 0 0 0-42.666-42.667zm298.666 0A42.667 42.667 0 0 0 618.667 384v64A42.667 42.667 0 0 0 704 448v-64a42.667 42.667 0 0 0-42.667-42.667z"/></svg>'
      },
      {
        type: 'html',
        title: '原生HTML',
        innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M128 64l69.8 791.6L511 960l315.2-104.4L896 64H128zm616.4 255.8H376.8l8.2 98.8h351.2L709 715.4l-195.8 54v.6H511l-197.4-54.6-12-151.6H397l7 76.2 107 29 107.4-29 12-124.4H296.6L271 224.4h482.2l-8.8 95.4z"></path></svg>'
      },
      {
        type: 'emotion',
        title: '其他表情',
        innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M335.008 916.63c-35.915 22.314-82.88 10.773-104.693-25.558a77.333 77.333 0 0 1-8.96-57.43l46.485-198.24a13.141 13.141 0 0 0-4.021-12.863l-152.16-132.587c-31.606-27.52-35.254-75.648-8.235-107.733a75.68 75.68 0 0 1 51.733-26.752L354.848 339.2c4.352-.363 8.245-3.232 10.027-7.595l76.938-188.17c16.032-39.2 60.619-57.92 99.52-41.462a76.31 76.31 0 0 1 40.832 41.462l76.939 188.16c1.781 4.373 5.675 7.253 10.027 7.605l199.712 16.277c41.877 3.414 72.885 40.459 69.568 82.518a76.939 76.939 0 0 1-26.08 51.978L760.17 622.56c-3.542 3.083-5.142 8.075-4.022 12.853l46.486 198.24c9.621 41.014-15.36 82.336-56.139 92.224a75.285 75.285 0 0 1-57.525-9.237L517.995 810.4a11.296 11.296 0 0 0-12.011 0L334.997 916.64z"/></svg>'
      },
      {
        type: 'time',
        title: '当前时间',
        innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M512 170.667A341.333 341.333 0 1 1 170.667 512 341.333 341.333 0 0 1 512 170.667m0-85.334A426.667 426.667 0 1 0 938.667 512 426.667 426.667 0 0 0 512 85.333z"/><path d="M648.747 588.587l-94.08-94.08V277.333a42.667 42.667 0 0 0-85.334 0V512a37.333 37.333 0 0 0 0 8.533v2.347a42.667 42.667 0 0 0 1.92 5.547v1.706a38.613 38.613 0 0 0 8.32 12.16L586.24 648.96a42.667 42.667 0 0 0 32.427 12.373 42.667 42.667 0 0 0 30.08-12.373 42.667 42.667 0 0 0 0-60.373z"/></svg>'
      },
    ]
  },
  {
    type: 'tools',
    title: '工具栏',
    innerHTML: '<svg class="cm-menu-item-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M875.52 383.36c-5.12-27.52-40.32-37.76-60.16-17.92L647.04 533.12c-23.68 23.68-62.72 23.68-87.04 0l-86.4-86.4c-24.32-24.32-24.32-62.72 0-86.4l169.6-168.96c19.84-19.84 10.24-55.04-17.28-60.16-99.2-19.2-205.44 9.6-282.24 86.4-85.12 83.84-111.36 204.8-78.72 312.32 5.12 17.28 1.92 36.48-10.88 49.28L83.2 749.44c-23.68 23.68-23.68 62.72 0 86.4l87.04 86.4c23.68 23.68 62.72 23.68 87.04 0l172.16-171.52c12.8-12.8 31.36-16.64 49.28-11.52 106.88 31.36 226.56 5.12 311.04-79.36 74.88-74.88 103.68-179.2 85.76-276.48z"/></svg>',
    children: [
      {
        type: 'clean',
        title: '清屏',
        innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M479.3 863.6L899.9 443c37.4-37.4 37.4-98.3 0-135.8L716.7 124.1C698.5 106 674.4 96 648.7 96c-25.8 0-50.4 10.8-68.6 29l-455 455c-18.2 18.2-29 42.8-29 68.6 0 25.7 9.9 49.9 28.1 68l183.1 183.2c18.1 18.1 42.2 28.1 67.9 28.1 3 0 5.9-.1 8.8-.4v.1h512c17.7 0 32-14.3 32-32s-14.3-32-32-32H479.3zm-126.8-9L169.4 671.5c-6-6-9.4-14.1-9.4-22.6 0-8.5 3.3-16.6 9.4-22.6l104.9-104.9 228.4 228.4-104.9 104.8c-6 6-14.1 9.4-22.6 9.4-8.6 0-16.6-3.3-22.7-9.4z"/></svg>',
      },
      {
        type: 'download',
        title: '下载文档',
        innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M64.3 874.8v62.6c0 4.8 3.9 8.7 8.7 8.7h878c4.8 0 8.7-3.9 8.7-8.7v-62.6c0-4.8-3.9-8.7-8.7-8.7H73c-4.8 0-8.7 3.9-8.7 8.7zm418.9-99.9c3.2 2.9 6.8 5.3 10.9 7.1 5.2 2.3 10.7 3.4 16.1 3.4 9.8 0 19.5-3.6 27-10.5l291.4-270.4c3.5-3.2 3.7-8.7.5-12.2l-42.3-46.2c-3.3-3.6-8.8-3.8-12.3-.5L550.2 654.5v-528c0-4.8-3.9-8.7-8.7-8.7h-62.6c-4.8 0-8.7 3.9-8.7 8.7v527.9L239.6 442.9c-3.5-3.2-9-3-12.3.5L185 489.7c-3.2 3.5-3 9 .5 12.3l297.7 272.9z"/></svg>',
      },
      {
        type: 'draft',
        title: '保存草稿',
        innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M96 960a32 32 0 1 1 0-64h832a32 32 0 1 1 0 64H96zm632.96-625.152L593.088 199.104l-340.48 340.48L240 690.432l148.032-14.784 340.8-340.8zm45.184-45.248l45.248-45.248-135.744-135.744-45.248 45.248L774.144 289.6zm-45.12-226.176l135.808 135.808c31.232 31.232 24.832 65.408-.192 90.368L412.16 742.144l-247.168 24.448 20.864-250.688L638.336 63.36c25.024-24.96 59.456-31.168 90.688.064z"></path></svg>',
      },
      {
        type: 'publish',
        title: '发布文章（页面）',
        innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M128 554.667h768a42.667 42.667 0 0 0 0-85.334H128a42.667 42.667 0 0 0 0 85.334z"/><path d="M469.333 128v768a42.667 42.667 0 0 0 85.334 0V128a42.667 42.667 0 0 0-85.334 0z"/></svg>',
      },
    ]
  },
  {
    type: 'full-screen',
    title: '全屏/取消全屏',
    innerHTML: '<svg class="cm-menu-item-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M725.333 725.333H298.667V298.667h426.666zM213.333 640v170.667H384V896H213.333A85.333 85.333 0 0 1 128 810.667V640h85.333zM896 640v170.667A85.333 85.333 0 0 1 810.667 896H640v-85.333h170.667V640H896zm-85.333-512A85.333 85.333 0 0 1 896 213.333V384h-85.333V213.333H640V128h170.667zM384 128v85.333H213.333V384H128V213.333A85.333 85.333 0 0 1 213.333 128H384z"/></svg>',
  },
  {
    type: 'preview',
    title: '预览',
    innerHTML: '<svg class="cm-menu-item-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M832 128c70.692 0 128 57.308 128 128v512c0 70.692-57.308 128-128 128H192c-70.692 0-128-57.308-128-128V256c0-70.692 57.308-128 128-128h640zm0 72H192c-30.619 0-55.498 24.573-56 55.074V768c0 30.619 24.573 55.498 55.074 55.992L192 824h640c30.619 0 55.498-24.573 56-55.074V256c0-30.619-24.573-55.498-55.074-55.992L832 200zM693.031 450.127l.425.417 128 128c13.918 13.918 14.057 36.398.417 50.487l-.417.425-128 128c-14.059 14.059-36.853 14.059-50.912 0-13.918-13.918-14.057-36.398-.417-50.487l.417-.425L745.09 604 642.544 501.456c-13.918-13.918-14.057-36.398-.417-50.487l.417-.425c13.918-13.918 36.398-14.057 50.487-.417zM284 312c19.882 0 36 16.118 36 36s-16.118 36-36 36h-56c-19.882 0-36-16.118-36-36s16.118-36 36-36h56zm512 0c19.882 0 36 16.118 36 36s-16.118 36-36 36H420c-19.882 0-36-16.118-36-36s16.118-36 36-36h376z"/></svg>',
  },
]