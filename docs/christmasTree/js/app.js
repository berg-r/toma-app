'use strict';
function handleDragStart(e){
  this.classList.add('move');
  e.dataTransfer.setData('text', e.target.id);
}

function handleDragEnter(e) {
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  return false;
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  var id_name = e.dataTransfer.getData("text");
  var drag_elm = document.getElementById(id_name);
  drag_elm.style.left = (e.clientX - drag_elm.clientWidth/2) + 'px';
  drag_elm.style.top = (e.clientY - (drag_elm.clientHeight/2)) + 'px';
  e.currentTarget.appendChild(drag_elm);
  e.preventDefault();
}

function handleDragEnd(e) {
  [].forEach.call(items, function(item) {
    item.classList.remove('move');
  });
}

function setId(item, index) {
  item.id = 'ornament'+ index;
}

var items = document.querySelectorAll('.ornament'),
dropAreas = document.querySelectorAll('.dropArea');

[].forEach.call(items, function(item, index) {
  setId(item, 'item'+index);//IDをふり分ける
  item.addEventListener('dragstart', handleDragStart, false);
  item.addEventListener('dragenter', handleDragEnter, false);
  item.addEventListener('dragend', handleDragEnd, false);
});
[].forEach.call(dropAreas, function(dropArea) {
  dropArea.addEventListener('drop', handleDrop, false);
  dropArea.addEventListener('dragover', handleDragOver, false);
});
