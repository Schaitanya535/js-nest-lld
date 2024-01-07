import { Injectable } from '@nestjs/common';
import { DoublyLinkedList, DoublyLinkedListNode } from 'datastructures-js';

@Injectable()
export class LRUCache {
  private cache: Map<string, DoublyLinkedListNode>;
  private max: number = 0;
  private list: DoublyLinkedList<string>;
  constructor(size: number) {
    this.cache = new Map<string, DoublyLinkedListNode>();
    this.list = new DoublyLinkedList<string>();
    this.max = size;
  }

  get(key: string): string {
    if (!this.cache.has(key)) {
      return '';
    }
    const value = this.cache.get(key);
    this.list.remove(value);
    this.list.insertFirst(new DoublyLinkedListNode(value.getValue()));
    return value.getValue();
  }

  put(key: string, value: string): void {
    if (this.cache.has(key)) {
      this.list.remove(this.cache.get(key));
    } else if (this.cache.size === this.max) {
      const last = this.list.tail();
      this.list.remove(last);
      this.cache.delete(last.getValue());
    }
    this.cache.set(key, new DoublyLinkedListNode(value));
    this.list.insertFirst(value);
  }
}
