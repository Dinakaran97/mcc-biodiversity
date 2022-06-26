import { TestBed } from '@angular/core/testing';

import { TreeuploadService } from './treeupload.service';

describe('TreeuploadService', () => {
  let service: TreeuploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreeuploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
